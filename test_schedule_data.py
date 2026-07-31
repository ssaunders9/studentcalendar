"""Regression checks for the generated Student Calendar catalog.

Run from this directory with: .venv/bin/python -m unittest -v test_schedule_data.py
"""
import json
import re
import unittest
from pathlib import Path

ROOT = Path(__file__).parent


def load_catalog():
    text = (ROOT / "coursesData.js").read_text()
    match = re.search(r"const COURSE_CATALOG = (\[.*?\]);", text, re.DOTALL)
    if not match:
        raise AssertionError("COURSE_CATALOG JSON was not found")
    return json.loads(match.group(1))


def meetings(record):
    if record.get("meetings"):
        return record["meetings"]
    return [{
        "days": record.get("days", []),
        "startTime": record.get("startTime", ""),
        "endTime": record.get("endTime", ""),
        "location": record.get("location", ""),
    }]


class CatalogRegressionTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.catalog = load_catalog()
        cls.by_code = {course["code"]: course for course in cls.catalog}

    def test_catalog_has_expected_course_count_and_no_400_level_courses(self):
        self.assertEqual(len(self.catalog), 111)
        self.assertTrue(all(
            not re.search(r"\s4\d\d(?:\s|$)", course["code"])
            for course in self.catalog
        ))

    def test_all_sections_have_valid_meetings(self):
        for course in self.catalog:
            for section in course.get("sections", []):
                for meeting in meetings(section):
                    self.assertTrue(meeting["days"], (course["code"], section))
                    self.assertRegex(meeting["startTime"], r"^\d{2}:\d{2}$")
                    self.assertRegex(meeting["endTime"], r"^\d{2}:\d{2}$")
                    self.assertLess(meeting["startTime"], meeting["endTime"], (course["code"], section))
                    self.assertTrue(all(0 <= day <= 6 for day in meeting["days"]))

    def test_known_multi_meeting_sections(self):
        physics = self.by_code["PHYSICS 201"]["sections"]
        self.assertTrue(all(len(meetings(section)) == 2 for section in physics))
        me = self.by_code["ME 241"]["sections"]
        self.assertEqual(len(meetings(me[0])), 2)

    def test_lab_credit_metadata_is_valid(self):
        for course in self.catalog:
            if course.get("labs"):
                self.assertGreaterEqual(course.get("labCredits", 0), 0)
                self.assertLessEqual(course["labCredits"], 6)

    def test_manual_credit_validation_preserves_zero(self):
        source = (ROOT / "calendar.js").read_text()
        html = (ROOT / "index.html").read_text()
        self.assertIn("credits = Number(this.els.courseCredits.value)", source)
        self.assertIn("credits < 0 || credits > 6", source)
        self.assertNotIn("parseInt(this.els.courseCredits.value) || 3", source)
        self.assertIn('id="course-credits"', html)
        self.assertIn('min="0"', html)


if __name__ == "__main__":
    unittest.main()

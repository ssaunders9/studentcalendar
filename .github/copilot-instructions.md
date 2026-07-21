# Copilot Instructions

## Workspace Context

This repo is part of a larger faculty workspace for teaching, department service, and research at WSU's Voiland School of Chemical Engineering and Bioengineering (VSCEB). The parent workspace repo is at `https://github.com/ssaunders9/workspace`.

## Naming Conventions (Strictly Enforced)

- **Underscores only, never spaces**: `CHE_441/`, `retention_analysis.py`, `syllabus_2026.pdf`
- **Meta/non-primary folders prefixed with `_`**: `_Archive/`, `_Drafts/`, `_Scripts/`
- **Content folders unprefixed**: `Syllabus/`, `Assets/`, `Canvas_Pages/`
- **Course codes**: space in code (`CHE 101`), underscore in folder name (`CHE_441/`)

## Python Environment

When running Python scripts (e.g., `rebuild_catalog.py`): use `.venv/bin/python` from the workspace root. Key packages: `pandas`, `numpy`, `scipy`, `matplotlib`, `python-docx`, `openpyxl`, `Pillow`, `cv2`, `pytesseract`, `rdkit`, `pymupdf`.

## Response Style

**When asked what to work on, or when a session involves a multi-step task, always respond with a numbered list.** Each item should be one actionable thing. Do not combine multiple changes into one list item. The list is the working agenda — the user picks items from it to execute one at a time.

## Patterns & Conventions

- **Backups are component-local with timestamped names** — never overwrite an existing backup.
- **`_Archive/` and `_Drafts/` are not authoritative** — always edit the non-prefixed sibling.
- **Before editing, inspect the nearby README, local scripts, and canonical source file** so changes match local conventions.
- **Do not consolidate duplicated images, reorganize archives, or clean generated files** unless explicitly asked.
- **Check before re-running a long or resource-heavy script** — confirm it isn't already running, rather than launching another one reflexively.

## Project: Student Week Scheduler

A draggable weekly calendar app for WSU engineering students to plan their semester schedule. Single-page web app served statically — no build step, no framework.

**Remote**: `https://github.com/ssaunders9/studentcalendar`

## Source Files

| File | Purpose |
|---|---|
| `index.html` | Main HTML — sidebar (onboarding, course catalog, quick-add), calendar grid, edit modal |
| `calendar.css` | All styles — calendar grid, course colors, drag/resize, sidebar, print media queries, wellness badges |
| `calendar.js` | `CalendarApp` class — rendering, drag/drop/resize, course management, wellness checks, export/import, keyboard shortcuts |
| `coursesData.js` | **Generated file** — 103-course catalog with section schedules, locations, lab data |
| `rebuild_catalog.py` | Python script that generates `coursesData.js` — helper functions for lecture/lab/chem-lab sections |
| `_schedule_data.txt` | Raw schedule data source |

## Key Architecture

- **`CalendarApp` class** in `calendar.js` — the single monolithic controller. All state lives here.
- **Courses** defined in `coursesData.js` as an array of objects: `{code, name, credits, mode ('lecture'|'lab'), sections[], labs[]?, labCredits?}`. Each section has `{section, days[], startTime, endTime, location}`.
- **Wellness check** analyzes meals, sleep, study/class balance, exercise, and total workload — renders ⚠/✓ badges per category.
- **Export/Import**: JSON serialization of the full schedule state. PDF via browser print (landscape, hides sidebar).
- **Accessibility**: skip-link, ARIA labels on calendar grid cells, keyboard-draggable events.

## Running Locally

```bash
cd Teaching/Student_Calendar
python -m http.server 8000
# → http://localhost:8000
```

## Regenerating the Course Catalog

```bash
python rebuild_catalog.py
```
This overwrites `coursesData.js`. Only needed when course data changes (new sections, schedule updates, new courses).

## Style Conventions

- WSU-branded: crimson (`#A60F2D`), gray sidebar, white calendar
- Course difficulty color-coded: green (easy), gold (medium), red (hard)
- Print: landscape A-size, monochrome-optimized, sidebar hidden

## Editing Guidelines

- **`coursesData.js` is generated** — edit `rebuild_catalog.py` (or `_schedule_data.txt`) instead, then regenerate
- **Don't restructure the `CalendarApp` class** unless explicitly asked — the monolithic design is intentional for this project's scope
- **Print styles are fragile** — test with Ctrl+P before shipping any CSS changes
- **Keep the onboarding flow** (5-step guide in sidebar) — it's pedagogically important for ENGR 101

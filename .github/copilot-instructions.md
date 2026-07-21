# Copilot Instructions — Student Week Scheduler

## Overview

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

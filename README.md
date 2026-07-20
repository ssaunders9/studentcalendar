# Student Week Scheduler

A draggable weekly calendar app to help students manage their time.

## Features

- **Course input** — enter course code, name, schedule, difficulty (easy/medium/hard), and location; auto-placed on calendar
- **Draggable events** — drag to move, resize from bottom edge, double-click to edit
- **Click-to-create** — click any empty time slot to add an event
- **Work schedule** — toggle if you work, set days/hours
- **Quick-add buttons** — one-click Meal, Sleep, Club, Study, Exercise, Free Time blocks
- **Wellness check-in** — analyzes meals, sleep, study/class balance, exercise, and total workload
- **Print view** — landscape-optimized print layout (hides sidebar)
- **Export/Import** — save/load your schedule as JSON

## How to Run

```bash
cd Teaching/Student_Calendar
python -m http.server 8000
```

Then open `http://localhost:8000` in your browser.

## Files

| File | Purpose |
|---|---|
| `index.html` | Main HTML structure with sidebar + calendar + modal |
| `calendar.css` | All styles including print media queries |
| `calendar.js` | CalendarApp class — rendering, drag/drop, courses, wellness, export/import |

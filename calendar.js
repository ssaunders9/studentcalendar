/**
 * Student Week Scheduler — Calendar App
 * A draggable weekly calendar for student time management.
 */

class CalendarApp {
    constructor() {
        // ── State ──
        this.events = [];
        this.courses = [];
        this.eventIdCounter = 0;
        this.currentWeekStart = this._mondayOfWeek(new Date());
        this.workSettings = { active: false, plannedHours: 15 };

        // ── Drag state ──
        this.dragState = {
            active: false,
            type: null,       // 'move' | 'resize' | 'create'
            eventId: null,
            startDay: -1,
            startHour: -1,
            currentDay: -1,
            currentHour: -1,
            offsetY: 0,
            ghost: null,
        };
        this._dragMoved = false;
        this._justDragged = false;

        // ── Constants ──
        this.GRID_START = 0;   // Midnight (show all 24 hours)
        this.GRID_END = 24;    // Midnight next day
        this.HOUR_HEIGHT = 64; // px per hour (must match CSS --hour-h)

        // ── Init ──
        this._cacheDom();
        this._bindEvents();
        this._renderAll();
    }

    // ═══════════════════════════════════════════
    //  DOM CACHE
    // ═══════════════════════════════════════════
    _cacheDom() {
        const id = s => document.getElementById(s);
        this.els = {
            weekLabel: id('week-label'),
            timeAxis: id('time-axis'),
            daysContainer: id('days-container'),
            eventsLayer: id('events-layer'),
            calendarWrapper: id('calendar-grid-wrapper'),
            calendarGrid: id('calendar-grid'),

            // Course form
            addCourseBtn: id('add-course-btn'),
            coursePrefix: id('course-prefix'),
            courseCatalogList: id('course-catalog-list'),
            courseLabSection: id('course-lab-section'),
            courseLabSelect: id('course-lab-select'),
            courseNotListed: id('course-not-listed'),
            courseManual: id('course-manual'),
            courseCode: id('course-code'),
            courseName: id('course-name'),
            courseDays: id('course-days'),
            courseStart: id('course-start'),
            courseEnd: id('course-end'),
            courseLocation: id('course-location'),
            courseCredits: id('course-credits'),
            courseMode: id('course-mode'),
            courseList: id('course-list'),
            confirmCourseBtn: id('confirm-course-btn'),
            cancelCourseBtn: id('cancel-course-btn'),
            courseModalMsg: id('course-modal-msg'),
            courseModal: id('course-modal'),

            // Work
            workToggle: id('work-toggle'),
            workDetails: id('work-details'),
            workHours: id('work-hours'),

            // Quick add
            quickAddSection: id('quick-add-section'),

            // Wellness
            wellnessBtn: id('wellness-btn'),
            wellnessResults: id('wellness-results'),

            // Save
            exportBtn: id('export-btn'),
            importBtn: id('import-btn'),
            importFile: id('import-file'),
            printBtn: id('print-btn'),
            clearBtn: id('clear-btn'),

            // Modal
            modal: id('event-modal'),
            modalTitle: id('modal-title'),
            eventTitle: id('event-title'),
            eventType: id('event-type'),
            eventStart: id('event-start'),
            eventEnd: id('event-end'),
            eventLocation: id('event-location'),
            eventNotes: id('event-notes'),
            saveEventBtn: id('save-event-btn'),
            cancelEventBtn: id('cancel-event-btn'),
            deleteEventBtn: id('delete-event-btn'),

            // Nav
            prevWeek: id('prev-week'),
            nextWeek: id('next-week'),
            todayBtn: id('today-btn'),
        };
    }

    // ═══════════════════════════════════════════
    //  EVENT BINDING
    // ═══════════════════════════════════════════
    _bindEvents() {
        // Course form
        this._populatePrefixes();
        this.els.addCourseBtn.addEventListener('click', () => this._openCourseModal());
        this.els.coursePrefix.addEventListener('change', () => this._filterCatalogCourses());
        this.els.courseNotListed.addEventListener('change', () => this._toggleManualEntry());
        this.els.confirmCourseBtn.addEventListener('click', () => this._addCourse());
        this.els.cancelCourseBtn.addEventListener('click', () => this._closeCourseModal());
        this.els.courseModal.addEventListener('click', e => { if (e.target === this.els.courseModal) this._closeCourseModal(); });
        const courseCloseBtn = this.els.courseModal.querySelector('.modal-close-btn');
        if (courseCloseBtn) courseCloseBtn.addEventListener('click', () => this._closeCourseModal());

        // Work
        this.els.workToggle.addEventListener('change', () => this._toggleWork());
        this.els.workHours.addEventListener('change', () => {
            this.workSettings.plannedHours = parseInt(this.els.workHours.value) || 15;
        });

        // Quick add buttons
        this.els.quickAddSection.addEventListener('click', e => {
            const btn = e.target.closest('.quick-btn');
            if (btn) this._quickAdd(btn.dataset.type);
        });

        // Wellness
        this.els.wellnessBtn.addEventListener('click', () => this._runWellnessCheck());

        // Save/Load
        this.els.exportBtn.addEventListener('click', () => this._exportData());
        this.els.importFile.addEventListener('change', e => this._importData(e));
        this.els.printBtn.addEventListener('click', () => {
            try { this._preparePrint(); } catch(e) {}
            setTimeout(() => window.print(), 100);
        });
        this.els.clearBtn.addEventListener('click', () => this._clearAll());

        // Modal
        this.els.saveEventBtn.addEventListener('click', () => this._saveEventFromModal());
        this.els.cancelEventBtn.addEventListener('click', () => this._closeModal());
        this.els.deleteEventBtn.addEventListener('click', () => this._deleteEventFromModal());

        // Nav
        this.els.prevWeek.addEventListener('click', () => this._navigateWeek(-1));
        this.els.nextWeek.addEventListener('click', () => this._navigateWeek(1));
        this.els.todayBtn.addEventListener('click', () => {
            this.currentWeekStart = this._mondayOfWeek(new Date());
            this._renderAll();
        });

        // Keyboard
        document.addEventListener('keydown', e => {
            if (e.key === 'Escape') this._closeModal();
        });

        // Re-render events on window resize (column positions change)
        let resizeTimer;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(() => this._renderEvents(), 80);
        });

        // Calendar drag interactions
        this.els.eventsLayer.addEventListener('mousedown', e => this._onDragStart(e));
        window.addEventListener('mousemove', e => this._onDragMove(e));
        window.addEventListener('mouseup', e => this._onDragEnd(e));

        // Double-click on calendar grid: edit event, or create new on empty space
        this.els.calendarGrid.addEventListener('dblclick', e => {
            if (!e.isTrusted) return;
            this._justDragged = false;
            const block = e.target.closest('.event-block');
            if (block && block.dataset.eventId) {
                this._openModal(parseInt(block.dataset.eventId));
                return;
            }
            // Double-click on empty space → create new event
            const { day, hour } = this._mouseToGrid(e);
            if (day >= 0 && day < 7 && hour >= this.GRID_START && hour < this.GRID_END) {
                this._openModalForNew(day, hour);
            }
        });

        // Keyboard navigation for events
        this.els.eventsLayer.addEventListener('keydown', e => {
            const block = e.target.closest('.event-block');
            if (!block) return;
            const eventId = parseInt(block.dataset.eventId);

            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this._openModal(eventId);
            } else if (e.key === 'Delete' || e.key === 'Backspace') {
                e.preventDefault();
                if (confirm('Delete this event?')) {
                    this.events = this.events.filter(ev => ev.id !== eventId);
                    this._renderAll();
                }
            } else if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
                e.preventDefault();
                this._navigateEventFocus(eventId, e.key === 'ArrowRight' ? 1 : -1);
            }
        });

        // Keyboard: Enter on empty gridcell creates new event
        this.els.daysContainer.addEventListener('keydown', e => {
            if (e.key === 'Enter' || e.key === ' ') {
                const cell = e.target.closest('.hour-slot');
                if (cell) {
                    e.preventDefault();
                    const day = parseInt(cell.dataset.day);
                    const hour = parseInt(cell.dataset.hour);
                    this._openModalForNew(day, hour);
                }
            }
        });

        // Close modal on backdrop click
        this.els.modal.addEventListener('click', e => {
            if (e.target === this.els.modal) this._closeModal();
        });

        // Modal close button
        const closeBtn = this.els.modal.querySelector('.modal-close-btn');
        if (closeBtn) closeBtn.addEventListener('click', () => this._closeModal());

        // Focus trap in modal
        this.els.modal.addEventListener('keydown', e => {
            if (e.key !== 'Tab' || this.els.modal.classList.contains('hidden')) return;
            const focusable = this.els.modal.querySelectorAll(
                'input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex]:not([tabindex="-1"])'
            );
            if (focusable.length === 0) return;
            const first = focusable[0];
            const last = focusable[focusable.length - 1];
            if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
            else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
        });
    }

    // Show a lock toast above a course event block
    _showLockToast(block) {
        const msg = document.createElement('div');
        msg.className = 'lock-toast';
        msg.setAttribute('role', 'alert');
        msg.textContent = 'Course schedule — remove and re-add to change time';
        const blockRect = block.getBoundingClientRect();
        const layerRect = this.els.eventsLayer.getBoundingClientRect();
        msg.style.left = (blockRect.left - layerRect.left) + 'px';
        msg.style.top = (blockRect.top - layerRect.top - 30) + 'px';
        msg.style.width = Math.max(blockRect.width, 200) + 'px';
        this.els.eventsLayer.appendChild(msg);
        setTimeout(() => msg.remove(), 2500);
    }

    // Navigate focus to next/previous event in tab order
    _navigateEventFocus(currentId, direction) {
        const blocks = Array.from(this.els.eventsLayer.querySelectorAll('.event-block'));
        const idx = blocks.findIndex(b => parseInt(b.dataset.eventId) === currentId);
        if (idx < 0) return;
        const next = blocks[(idx + direction + blocks.length) % blocks.length];
        if (next) next.focus();
    }

    // ═══════════════════════════════════════════
    // ═══════════════════════════════════════════
    //  RENDERING
    // ═══════════════════════════════════════════
    _renderAll() {
        this._suppressModal = true;
        try {
            this._renderWeekLabel();
            this._renderTimeAxis();
            this._renderDayColumns();
            this._renderEvents();
            this._renderCourseList();
            this._updateNowLine();
        } finally {
            this._suppressModal = false;
        }
    }

    _renderWeekLabel() {
        const end = new Date(this.currentWeekStart);
        end.setDate(end.getDate() + 6);
        const fmt = d => d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
        this.els.weekLabel.textContent = `${fmt(this.currentWeekStart)} – ${fmt(end)}, ${this.currentWeekStart.getFullYear()}`;
    }

    _renderTimeAxis() {
        let html = '<div class="day-header"></div>';
        for (let h = this.GRID_START; h < this.GRID_END; h++) {
            const label = h === 0 ? '12 AM' : h < 12 ? `${h} AM` : h === 12 ? '12 PM' : `${h - 12} PM`;
            html += `<div class="time-label">${label}</div>`;
        }
        this.els.timeAxis.innerHTML = html;
    }

    _renderDayColumns() {
        const dayNames = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
        const today = new Date();
        const todayDay = (today.getDay() + 6) % 7; // Monday = 0

        let html = '';
        for (let d = 0; d < 7; d++) {
            const date = new Date(this.currentWeekStart);
            date.setDate(date.getDate() + d);
            const dateStr = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
            const isToday = (date.toDateString() === today.toDateString());
            html += `<div class="day-column${isToday ? ' today' : ''}" data-day="${d}">`;
            html += `<div class="day-header" aria-label="${dayNames[d]} ${dateStr}">${dayNames[d]}<br><small>${dateStr}</small></div>`;
            // Hour slots
            for (let h = this.GRID_START; h < this.GRID_END; h++) {
                const hourLabel = h === 0 ? '12 AM' : h < 12 ? `${h} AM` : h === 12 ? '12 PM' : `${h - 12} PM`;
                html += `<div class="hour-slot" data-day="${d}" data-hour="${h}" tabindex="-1" aria-label="${dayNames[d]} ${dateStr} ${hourLabel}"></div>`;
            }
            html += '</div>';
        }
        this.els.daysContainer.innerHTML = html;
    }

    _renderEvents() {
        // Mark conflicts before rendering
        for (const ev of this.events) {
            ev._conflict = this._findConflicts(ev).length > 0;
        }

        // Detect identical-position events and assign stagger offsets
        const posMap = new Map(); // key: "day|startHour|endHour" → count
        for (const ev of this.events) {
            const key = `${ev.day}|${ev.startHour}|${ev.endHour}`;
            posMap.set(key, (posMap.get(key) || 0) + 1);
        }
        const staggerIdx = new Map();
        for (const ev of this.events) {
            const key = `${ev.day}|${ev.startHour}|${ev.endHour}`;
            if (posMap.get(key) > 1) {
                const idx = staggerIdx.get(key) || 0;
                ev._stagger = idx;
                staggerIdx.set(key, idx + 1);
            } else {
                ev._stagger = 0;
            }
        }

        this.els.eventsLayer.innerHTML = '';

        for (const ev of this.events) {
            const el = this._createEventElement(ev);
            this.els.eventsLayer.appendChild(el);
        }

        // Now line
        const nowLine = document.createElement('div');
        nowLine.id = 'now-line';
        this.els.eventsLayer.appendChild(nowLine);
        this._updateNowLine();
    }

    // Find events that overlap with the given event (same day, overlapping times)
    _findConflicts(event) {
        return this.events.filter(ev =>
            ev.id !== event.id &&
            ev.day === event.day &&
            ev.startHour < event.endHour &&
            event.startHour < ev.endHour
        );
    }

    _createEventElement(ev) {
        const el = document.createElement('div');
        el.className = `event-block type-${ev.type}`;
        if (ev.difficulty) el.classList.add(ev.difficulty);
        if (ev._conflict) el.classList.add('conflict');
        if (ev.locked) el.classList.add('locked');
        el.dataset.eventId = ev.id;
        el.setAttribute('tabindex', '0');
        const conflictLabel = ev._conflict ? ' ⚠ CONFLICT' : '';
        el.setAttribute('aria-label', `${ev.title}, ${this._formatTimeRange(ev.startHour, ev.endHour)}${ev.location ? ', ' + ev.location : ''}${conflictLabel}`);

        // Position — measure actual column from DOM so flexbox rounding can't drift
        const col = this._getColumnRect(ev.day);
        const top = (ev.startHour - this.GRID_START) * this.HOUR_HEIGHT;
        const height = (ev.endHour - ev.startHour) * this.HOUR_HEIGHT;

        if (this._printing) {
            // Print mode: use percentage-based positioning — DOM measurement
            // returns screen coordinates which don't match print layout
            const pctPerDay = 100 / 7;
            el.style.left = (ev.day * pctPerDay) + '%';
            el.style.width = Math.max(pctPerDay - 0.5, 10) + '%';
        } else {
            el.style.left = col.left + 'px';
            el.style.width = Math.max(col.width - 4, 20) + 'px';
        }
        el.style.top = top + 'px';
        el.style.height = Math.max(height, 24) + 'px';

        // Stagger identical-position events so they don't fully hide each other
        if (ev._stagger > 0) {
            el.style.marginLeft = (ev._stagger * 8) + 'px';
            el.style.marginTop = (ev._stagger * 4) + 'px';
            el.style.zIndex = (4 + ev._stagger);
        }

        // Content
        const timeStr = this._formatTimeRange(ev.startHour, ev.endHour);
        let html = `<div class="event-title">${this._escHtml(ev.title)}</div>`;
        html += `<div class="event-time">${timeStr}</div>`;
        if (ev.location) {
            html += `<div class="event-location">📍 ${this._escHtml(ev.location)}</div>`;
        }
        // Quick-delete button
        html += '<button class="event-delete-btn" title="Delete event" aria-label="Delete event">×</button>';
        el.innerHTML = html;

        // Delete button click handler
        el.querySelector('.event-delete-btn').addEventListener('click', (e) => {
            e.stopPropagation();
            this.events = this.events.filter(e => e.id !== ev.id);
            this._renderAll();
        });

        // Resize handle (only for non-locked events)
        if (!ev.locked) {
            const handle = document.createElement('div');
            handle.className = 'resize-handle';
            el.appendChild(handle);
        }

        return el;
    }

    _updateNowLine() {
        const nowLine = document.getElementById('now-line');
        if (!nowLine) return;

        const now = new Date();
        const weekStart = this.currentWeekStart;
        const weekEnd = new Date(weekStart);
        weekEnd.setDate(weekEnd.getDate() + 7);

        if (now < weekStart || now >= weekEnd) {
            nowLine.style.display = 'none';
            return;
        }

        const dayIndex = (now.getDay() + 6) % 7;
        const hourDecimal = now.getHours() + now.getMinutes() / 60;

        if (hourDecimal < this.GRID_START || hourDecimal >= this.GRID_END) {
            nowLine.style.display = 'none';
            return;
        }

        const col = this._getColumnRect(dayIndex);
        const top = (hourDecimal - this.GRID_START) * this.HOUR_HEIGHT;

        nowLine.style.display = 'block';
        nowLine.style.left = col.left + 'px';
        nowLine.style.top = top + 'px';
        nowLine.style.width = col.width + 'px';
    }

    // Measure a day column's position relative to the events layer
    _getColumnRect(dayIndex) {
        const dayColumn = this.els.daysContainer.querySelector(`.day-column[data-day="${dayIndex}"]`);
        const layerRect = this.els.eventsLayer.getBoundingClientRect();
        if (dayColumn) {
            const colRect = dayColumn.getBoundingClientRect();
            return {
                left: colRect.left - layerRect.left,
                width: colRect.width
            };
        }
        // Fallback
        const pctPerDay = 100 / 7;
        const w = this.els.eventsLayer.clientWidth || 700;
        return {
            left: (w / 7) * dayIndex,
            width: w / 7
        };
    }

    // ═══════════════════════════════════════════
    //  COURSE CATALOG
    // ═══════════════════════════════════════════
    _populatePrefixes() {
        const select = this.els.coursePrefix;
        if (!select || typeof COURSE_CATALOG === 'undefined') return;
        const prefixes = [...new Set(COURSE_CATALOG.map(c => c.code.replace(/\s+\d+.*$/, '')))].sort();
        for (const p of prefixes) {
            const opt = document.createElement('option');
            opt.value = p;
            opt.textContent = p;
            select.appendChild(opt);
        }
    }

    _filterCatalogCourses() {
        const prefix = this.els.coursePrefix.value;
        const list = this.els.courseCatalogList;
        list.innerHTML = '';
        if (!prefix || typeof COURSE_CATALOG === 'undefined') return;

        const matches = COURSE_CATALOG.filter(c => c.code.startsWith(prefix));
        if (matches.length === 0) {
            list.innerHTML = '<p style="color:#888;font-size:0.8rem;">No courses found for this prefix.</p>';
            return;
        }

        for (const c of matches) {
            const sections = c.sections || [{ section: '', days: [], startTime: '', endTime: '', location: '' }];
            for (const s of sections) {
                const timeDesc = this._meetingsToString(this._normalizeMeetings(s));
                const label = s.section
                    ? `${c.code}-${s.section} — ${timeDesc}`
                    : `${c.code} — ${timeDesc}`;
                const div = document.createElement('div');
                div.className = 'catalog-item';
                div.innerHTML = `<label><input type="radio" name="catalog-course" data-code="${c.code}" data-section="${s.section||''}" data-has-labs="${c.labs ? '1' : '0'}"> ${label}</label>`;
                list.appendChild(div);

        // Listen for radio changes to show/hide lab selector
        list.querySelectorAll('input[name="catalog-course"]').forEach(radio => {
            radio.addEventListener('change', () => this._onCatalogRadioChange());
        });
            }
        }
    }

    _toggleManualEntry() {
        this.els.courseManual.classList.toggle('hidden', !this.els.courseNotListed.checked);
    }

    _daysToString(days) {
        const names = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];
        return days.map(d => names[d]).join('/') || 'TBA';
    }

    // Format one or more meetings into a readable string
    _meetingsToString(meetings) {
        if (!meetings || meetings.length === 0) return 'TBA';
        return meetings.map(m =>
            `${this._daysToString(m.days || [])} ${m.startTime}-${m.endTime}`
        ).join(', ');
    }

    // Normalize a section/lab object to always have a meetings array
    _normalizeMeetings(section) {
        if (!section) return [];
        if (section.meetings && section.meetings.length > 0) return section.meetings;
        // Legacy format: days/startTime/endTime/location directly on section
        if (section.days && section.startTime) {
            return [{ days: section.days, startTime: section.startTime, endTime: section.endTime, location: section.location || '' }];
        }
        return [];
    }

    _openCourseModal() {
        this.els.coursePrefix.value = '';
        this.els.courseCatalogList.innerHTML = '';
        this.els.courseLabSection.classList.add('hidden');
        this.els.courseLabSelect.innerHTML = '';
        this.els.courseNotListed.checked = false;
        this.els.courseManual.classList.add('hidden');
        this.els.courseCode.value = '';
        this.els.courseName.value = '';
        this.els.courseCredits.value = '3';
        this.els.courseMode.value = 'lecture';
        this.els.courseLocation.value = '';
        this.els.courseStart.value = '09:00';
        this.els.courseEnd.value = '09:50';
        this.els.courseDays.value = 'MWF';
        document.querySelector('input[name="c-difficulty"][value="medium"]').checked = true;
        this.els.courseModalMsg.classList.add('hidden');
        this.els.courseModalMsg.textContent = '';
        this.els.courseModal.classList.remove('hidden');
        this.els.coursePrefix.focus();
    }

    _closeCourseModal() {
        this.els.courseModal.classList.add('hidden');
    }

    _getSelectedCatalogCourse() {
        const checked = this.els.courseCatalogList.querySelector('input[name="catalog-course"]:checked');
        if (!checked) return null;
        const code = checked.dataset.code;
        const sectionId = checked.dataset.section;
        const course = COURSE_CATALOG.find(c => c.code === code);
        if (!course) return null;
        const section = (course.sections || []).find(s => s.section === sectionId) ||
                        { section: '', days: course.days, startTime: course.startTime, endTime: course.endTime, location: course.location };
        const sectionMeetings = this._normalizeMeetings(section);

        // Also get selected lab section if applicable
        let labSection = null;
        let labMeetings = null;
        if (course.labs && course.labs.length > 0) {
            const labVal = this.els.courseLabSelect.value;
            labSection = course.labs.find(l => l.section === labVal) || null;
            if (labSection) labMeetings = this._normalizeMeetings(labSection);
        }

        return { course, section, sectionMeetings, labSection, labMeetings };
    }

    _onCatalogRadioChange() {
        const checked = this.els.courseCatalogList.querySelector('input[name="catalog-course"]:checked');
        const hasLabs = checked && checked.dataset.hasLabs === '1';
        this.els.courseLabSection.classList.toggle('hidden', !hasLabs);

        if (hasLabs) {
            const code = checked.dataset.code;
            const course = COURSE_CATALOG.find(c => c.code === code);
            const select = this.els.courseLabSelect;
            select.innerHTML = '';
            if (course && course.labs) {
                for (const lab of course.labs) {
                    const opt = document.createElement('option');
                    opt.value = lab.section;
                    opt.textContent = `Lab ${lab.section} — ${this._meetingsToString(this._normalizeMeetings(lab))}`;
                    select.appendChild(opt);
                }
            }
        }
    }

    // ═══════════════════════════════════════════
    //  COURSE MANAGEMENT
    // ═══════════════════════════════════════════
    _addCourse() {
        const difficulty = document.querySelector('input[name="c-difficulty"]:checked')?.value || 'medium';
        let code, name, credits, mode, days, startTime, endTime, location, meetings;

        const catalog = this._getSelectedCatalogCourse();
        if (catalog && !this.els.courseNotListed.checked) {
            // Check if a lab is required but not selected
            if (catalog.course.labs && catalog.course.labs.length > 0 && !catalog.labSection) {
                alert('This course requires a lab section. Please select one from the dropdown.');
                return;
            }
            // From catalog
            code = catalog.course.code;
            name = catalog.course.name;
            credits = catalog.course.credits;
            mode = catalog.course.mode || 'lecture';
            meetings = catalog.sectionMeetings || [];
            location = catalog.section.location || '';
        } else {
            // Manual entry
            code = this.els.courseCode.value.trim();
            name = this.els.courseName.value.trim();
            if (!code || !name) return;
            credits = parseInt(this.els.courseCredits.value) || 3;
            mode = this.els.courseMode.value || 'lecture';
            days = this._parseDays(this.els.courseDays.value);
            startTime = this.els.courseStart.value;
            endTime = this.els.courseEnd.value;
            location = this.els.courseLocation.value.trim();
            meetings = [{ days, startTime, endTime, location }];
        }

        // Check if this exact course code is already added
        const dup = this.courses.find(c => c.code === code);
        if (dup) {
            this.els.courseModalMsg.textContent = `${code} is already in your schedule. Remove it first, then add again.`;
            this.els.courseModalMsg.classList.remove('hidden');
            return;
        }

        const course = {
            id: ++this.eventIdCounter,
            code, name, meetings, location,
            difficulty, credits, mode,
        };

        this.courses.push(course);
        this._scheduleCourse(course);

        if (catalog && catalog.labSection) {
            const labCourse = {
                id: ++this.eventIdCounter,
                code: catalog.course.code + ' Lab',
                name: catalog.course.name + ' Lab',
                meetings: catalog.labMeetings || [],
                location: catalog.labSection.location || '',
                difficulty,
                credits: catalog.course.labCredits || 1,
                mode: 'lab',
            };
            this.courses.push(labCourse);
            this._scheduleCourse(labCourse);
        }

        this._closeCourseModal();
        this._renderAll();
    }

    _scheduleCourse(course) {
        const eventsToAdd = [];
        const meetings = course.meetings || [];
        for (const mtg of meetings) {
            for (const day of (mtg.days || [])) {
                const event = {
                    id: ++this.eventIdCounter,
                    title: `${course.code}: ${course.name}`,
                    type: 'class',
                    difficulty: course.difficulty,
                    day,
                    startHour: this._timeToDecimal(mtg.startTime),
                    endHour: this._timeToDecimal(mtg.endTime),
                    location: mtg.location || course.location || '',
                    courseId: course.id,
                    notes: '',
                    locked: true,
                };
                eventsToAdd.push(event);
            }
        }

        // Check conflicts: new events vs existing AND new events vs each other
        const allEvents = [...this.events];
        const conflicts = [];
        const seenPairs = new Set();
        for (const ev of eventsToAdd) {
            const overlapping = allEvents.filter(e =>
                e.day === ev.day &&
                e.startHour < ev.endHour &&
                ev.startHour < e.endHour
            );
            if (overlapping.length > 0) {
                conflicts.push({ event: ev, overlapping });
            }
            // Add this event to allEvents so subsequent new events check against it too
            allEvents.push(ev);
        }

        // Deduplicate: same pair of event titles shouldn't appear twice
        const unique = [];
        for (const c of conflicts) {
            for (const o of c.overlapping) {
                const key = [c.event.title, o.title].sort().join('||');
                if (!seenPairs.has(key)) {
                    seenPairs.add(key);
                    unique.push(`${c.event.title} ⇄ ${o.title}`);
                }
            }
        }

        if (unique.length > 0) {
            // Show warning in modal if it's open, otherwise alert
            const msg = '⚠️ Time conflict: ' + unique.join('; ');
            if (!this.els.courseModal.classList.contains('hidden')) {
                this.els.courseModalMsg.innerHTML = msg;
                this.els.courseModalMsg.classList.remove('hidden');
            } else {
                alert(msg);
            }
        }

        for (const ev of eventsToAdd) {
            this.events.push(ev);
        }
    }

    _removeCourse(courseId) {
        // Remove course events
        this.events = this.events.filter(ev => ev.courseId !== courseId);
        // Remove course
        this.courses = this.courses.filter(c => c.id !== courseId);
        this._renderAll();
    }

    _getDeptClass(code) {
        const prefix = (code || '').split(' ')[0].toUpperCase();
        const deptMap = {
            'BIO': 'dept-bioeng', 'CHE': 'dept-che', 'CE': 'dept-ce',
            'ENGR': 'dept-engr', 'ME': 'dept-me', 'MSE': 'dept-mse',
            'CPT_S': 'dept-cpts', 'E_E': 'dept-ee', 'MATH': 'dept-math',
            'PHYSICS': 'dept-physics', 'CHEM': 'dept-chem'
        };
        return deptMap[prefix] || 'dept-default';
    }

    _renderCourseList() {
        if (this.courses.length === 0) {
            this.els.courseList.innerHTML = '<p style="color:#777;font-size:0.8rem;text-align:center;padding:10px;">No courses added yet</p>';
            return;
        }

        const modeLabels = { lecture: 'Lec', lab: 'Lab', studio: 'Stu' };

        let html = '';
        for (const c of this.courses) {
            const modeLabel = modeLabels[c.mode] || '';
            const creditsStr = (c.credits || 3) + 'cr';
            const timeStr = this._meetingsToString(c.meetings);
            html += `
                <div class="course-item ${this._getDeptClass(c.code)}">
                    <div class="course-info">
                        <div class="course-code">${this._escHtml(c.code)}</div>
                        <div class="course-meta">${modeLabel} ${creditsStr} · ${this._escHtml(c.name)} · ${timeStr}</div>
                    </div>
                    <button class="remove-course" data-course-id="${c.id}" title="Remove course">✕</button>
                </div>`;
        }
        this.els.courseList.innerHTML = html;

        // Bind remove buttons
        this.els.courseList.querySelectorAll('.remove-course').forEach(btn => {
            btn.addEventListener('click', () => {
                const courseId = parseInt(btn.dataset.courseId);
                this._removeCourse(courseId);
            });
        });
    }

    // ═══════════════════════════════════════════
    //  WORK SCHEDULE
    // ═══════════════════════════════════════════
    _toggleWork() {
        const active = this.els.workToggle.checked;
        this.workSettings.active = active;
        this.els.workDetails.classList.toggle('hidden', !active);
        if (active) {
            this.workSettings.plannedHours = parseInt(this.els.workHours.value) || 15;
        }
    }

    // ═══════════════════════════════════════════
    //  QUICK ADD
    // ═══════════════════════════════════════════
    _quickAdd(type) {
        const defaults = {
            meal: { title: 'Meal', startH: 12, endH: 13, location: '' },
            sleep: { title: 'Sleep', startH: 23, endH: 7, location: '' },
            care: { title: 'Personal Care', startH: 7, endH: 8, location: '' },
            study: { title: 'Study Time', startH: 16, endH: 18, location: 'Library' },
            office: { title: 'Office Hours', startH: 13, endH: 14, location: '' },
            exercise: { title: 'Exercise', startH: 7, endH: 8, location: 'Gym' },
            club: { title: 'Club Activity', startH: 17, endH: 19, location: '' },
            work: { title: 'Work Shift', startH: 17, endH: 21, location: '' },
            free: { title: 'Free Time', startH: 19, endH: 22, location: '' },
        };

        const d = defaults[type];
        if (!d) return;

        const add = (ev) => { this.events.push({ id: ++this.eventIdCounter, ...ev }); };
        const weekTypes = ['meal', 'sleep', 'care']; // these go on all 7 days

        if (type === 'sleep') {
            const days = weekTypes.includes(type) ? [0,1,2,3,4,5,6] : [0];
            for (const day of days) {
                add({ title: d.title, type, day, startHour: d.startH, endHour: 24, location: d.location, notes: '' });
                add({ title: d.title, type, day: (day + 1) % 7, startHour: 0, endHour: d.endH, location: d.location, notes: '' });
            }
        } else if (weekTypes.includes(type)) {
            for (const day of [0,1,2,3,4,5,6]) {
                add({ title: d.title, type, day, startHour: d.startH, endHour: d.endH, location: d.location, notes: '' });
            }
        } else {
            add({ title: d.title, type, day: 0, startHour: d.startH, endHour: d.endH, location: d.location, notes: '' });
        }

        this._renderAll();
    }

    // ═══════════════════════════════════════════
    //  DRAG & DROP
    // ═══════════════════════════════════════════
    _onDragStart(e) {
        if (e.button !== 0) return; // Left click only

        const target = e.target;

        // Don't start drag on delete button clicks
        if (target.closest('.event-delete-btn')) return;

        const eventBlock = target.closest('.event-block');

        if (eventBlock) {
            const eventId = parseInt(eventBlock.dataset.eventId);
            const ev = this.events.find(ev => ev.id === eventId);
            if (!ev) return;

            // Locked events (scheduled from courses) can't be dragged or resized
            if (ev.locked) {
                e.preventDefault();
                this._showLockToast(eventBlock);
                return;
            }

            // Check if resize handle
            if (target.closest('.resize-handle')) {
                this.dragState = {
                    active: true,
                    type: 'resize',
                    eventId,
                    startDay: ev.day,
                    startHour: ev.startHour,
                    startEndHour: ev.endHour,
                    currentDay: ev.day,
                    currentHour: ev.endHour,
                    ghost: null,
                };
                eventBlock.classList.add('dragging');
            } else {
                this.dragState = {
                    active: true,
                    type: 'move',
                    eventId,
                    startDay: ev.day,
                    startHour: ev.startHour,
                    origDay: ev.day,
                    origStart: ev.startHour,
                    origEnd: ev.endHour,
                    currentDay: ev.day,
                    currentHour: ev.startHour,
                    offsetY: e.clientY - eventBlock.getBoundingClientRect().top,
                    ghost: null,
                };
                eventBlock.classList.add('dragging');
            }
            e.preventDefault();
            this._dragMoved = false;
            this._justDragged = false;
        }
    }

    _onDragMove(e) {
        if (!this.dragState.active) return;
        this._dragMoved = true;

        const { day, hour } = this._mouseToGrid(e);
        if (day < 0 || day >= 7) return;

        this.dragState.currentDay = day;
        this.dragState.currentHour = hour;

        const ev = this.events.find(ev => ev.id === this.dragState.eventId);
        if (!ev) return;

        if (this.dragState.type === 'move') {
            // Snap to half-hour
            const snapHour = Math.round(hour * 2) / 2;
            const duration = this.dragState.origEnd - this.dragState.origStart;
            const newStart = Math.max(this.GRID_START, Math.min(this.GRID_END - duration, snapHour - (this.dragState.offsetY / this.HOUR_HEIGHT)));
            const clampedStart = Math.round(newStart * 2) / 2;
            const clampedEnd = clampedStart + duration;

            ev.day = day;
            ev.startHour = clampedStart;
            ev.endHour = Math.min(this.GRID_END, clampedEnd);

            // Don't let it go past midnight
            if (ev.endHour > this.GRID_END) {
                ev.endHour = this.GRID_END;
                ev.startHour = this.GRID_END - duration;
            }
            if (ev.startHour < this.GRID_START) {
                ev.startHour = this.GRID_START;
                ev.endHour = Math.min(this.GRID_END, this.GRID_START + duration);
            }
        } else if (this.dragState.type === 'resize') {
            const snapHour = Math.round(hour * 2) / 2;
            const newEnd = Math.max(ev.startHour + 0.5, Math.min(this.GRID_END, snapHour));
            ev.endHour = newEnd;
        }

        this._renderEvents();
    }

    _onDragEnd(e) {
        if (!this.dragState.active) return;

        const block = this.els.eventsLayer.querySelector(`[data-event-id="${this.dragState.eventId}"]`);
        if (block) block.classList.remove('dragging');

        const didMove = this._dragMoved;
        this.dragState.active = false;
        this._justDragged = didMove;
        // Only re-render if the drag actually moved something
        if (didMove) this._renderEvents();
    }

    _mouseToGrid(e) {
        const layerRect = this.els.eventsLayer.getBoundingClientRect();

        const x = e.clientX - layerRect.left;
        const y = e.clientY - layerRect.top;

        const dayWidth = layerRect.width / 7;
        const day = Math.min(6, Math.max(0, Math.floor(x / dayWidth)));
        const hour = y / this.HOUR_HEIGHT + this.GRID_START;

        return { day, hour };
    }

    // ═══════════════════════════════════════════
    //  EVENT MODAL
    // ═══════════════════════════════════════════
    _openModalForNew(day, hour) {
        if (this._suppressModal) return;
        this._modalTrigger = document.activeElement;
        this._editingEventId = null;
        const startH = Math.floor(hour);
        const endH = startH + 1;

        this.els.modalTitle.textContent = 'New Event';
        this.els.eventTitle.value = '';
        this.els.eventType.value = 'study';
        this.els.eventStart.value = this._decimalToTimeString(startH);
        this.els.eventEnd.value = this._decimalToTimeString(endH);
        this.els.eventLocation.value = '';
        this.els.eventNotes.value = '';
        this.els.deleteEventBtn.classList.add('hidden');
        this.els.eventStart.disabled = false;
        this.els.eventEnd.disabled = false;
        this.els.eventType.disabled = false;
        this.els.eventTitle.disabled = false;

        this._pendingDay = day;
        const notice = this.els.modal.querySelector('.modal-lock-notice');
        if (notice) notice.style.display = 'none';
        this.els.modal.classList.remove('hidden');
        this.els.eventTitle.focus();
    }

    _openModal(eventId) {
        if (this._suppressModal) return;
        this._modalTrigger = document.activeElement;
        const ev = this.events.find(ev => ev.id === eventId);
        if (!ev) return;

        this._editingEventId = eventId;
        this._pendingDay = ev.day;

        this.els.modalTitle.textContent = ev.locked ? 'View Course' : 'Edit Event';
        this.els.eventTitle.value = ev.title;
        this.els.eventType.value = ev.type;
        this.els.eventStart.value = this._decimalToTimeString(ev.startHour);
        this.els.eventEnd.value = this._decimalToTimeString(ev.endHour);
        this.els.eventLocation.value = ev.location || '';
        this.els.eventNotes.value = ev.notes || '';
        this.els.deleteEventBtn.classList.toggle('hidden', ev.locked);

        // Lock time/type fields for course-scheduled events
        this.els.eventStart.disabled = ev.locked;
        this.els.eventEnd.disabled = ev.locked;
        this.els.eventType.disabled = ev.locked;
        this.els.eventTitle.disabled = ev.locked;

        this.els.modal.classList.remove('hidden');
        const notice = this.els.modal.querySelector('.modal-lock-notice');
        if (notice) notice.style.display = ev.locked ? 'block' : 'none';
        this.els.eventTitle.focus();
    }

    _closeModal() {
        this.els.modal.classList.add('hidden');
        this._editingEventId = null;
        this._pendingDay = -1;
        // Restore focus to the element that triggered the modal
        if (this._modalTrigger) { this._modalTrigger.focus(); this._modalTrigger = null; }
    }

    _saveEventFromModal() {
        const title = this.els.eventTitle.value.trim();
        if (!title) return;

        const type = this.els.eventType.value;
        const startHour = this._timeToDecimal(this.els.eventStart.value);
        const endHour = this._timeToDecimal(this.els.eventEnd.value);
        const location = this.els.eventLocation.value.trim();
        const notes = this.els.eventNotes.value.trim();

        if (endHour <= startHour) {
            alert('End time must be after start time.');
            return;
        }

        if (this._editingEventId !== null) {
            // Update existing
            const ev = this.events.find(ev => ev.id === this._editingEventId);
            if (ev) {
                ev.title = title;
                ev.type = type;
                ev.startHour = startHour;
                ev.endHour = endHour;
                ev.location = location;
                ev.notes = notes;
            }
        } else {
            // Check conflicts for new events
            const day = this._pendingDay >= 0 ? this._pendingDay : 0;
            const overlapping = this.events.filter(e =>
                e.day === day &&
                e.startHour < endHour &&
                startHour < e.endHour
            );
            if (overlapping.length > 0) {
                if (!confirm(`⚠️ This overlaps with: ${overlapping.map(o => o.title).join(', ')}.\n\nAdd anyway?`)) {
                    return;
                }
            }
            this.events.push({
                id: ++this.eventIdCounter,
                title, type, day,
                startHour, endHour, location, notes,
            });
        }

        this._closeModal();
        this._renderAll();
    }

    _deleteEventFromModal() {
        if (this._editingEventId === null) return;

        if (confirm('Delete this event?')) {
            this.events = this.events.filter(ev => ev.id !== this._editingEventId);
            this._closeModal();
            this._renderAll();
        }
    }

    // ═══════════════════════════════════════════
    //  WELLNESS CHECK
    // ═══════════════════════════════════════════

    // WSU standard: hours of outside work per credit per week
    _outsidePerCredit(mode) {
        const standards = { lecture: 2, lab: 0, studio: 1 };
        return standards[mode] || 2;
    }

    // Difficulty multiplier for outside work
    _difficultyMultiplier(difficulty) {
        const multipliers = { easy: 0.5, medium: 1, hard: 1.5 };
        return multipliers[difficulty] || 1;
    }

    // Expected office hours per week by difficulty
    _expectedOfficeHours(difficulty) {
        if (difficulty === 'hard') return 2;
        if (difficulty === 'medium') return 1;
        return 0;
    }

    _runWellnessCheck() {
        const results = [];
        const dayNames = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

        // ── Tally event hours by type ──
        let totalMealHours = 0, totalSleepHours = 0, totalStudyHours = 0;
        let totalClassHours = 0, totalWorkHours = 0, totalExerciseHours = 0;
        let totalFreeHours = 0, totalClubHours = 0, totalCareHours = 0;
        const dailyMeals = new Array(7).fill(0);
        const dailySleep = new Array(7).fill(0);

        for (const ev of this.events) {
            const duration = ev.endHour - ev.startHour;
            switch (ev.type) {
                case 'meal':    totalMealHours += duration; dailyMeals[ev.day] += duration; break;
                case 'sleep':   totalSleepHours += duration; dailySleep[ev.day] += duration; break;
                case 'study':   totalStudyHours += duration; break;
                case 'office':  totalStudyHours += duration; break; // office hours count as study
                case 'class':   totalClassHours += duration; break;
                case 'work':    totalWorkHours += duration; break;
                case 'exercise':totalExerciseHours += duration; break;
                case 'free':    totalFreeHours += duration; break;
                case 'club':    totalClubHours += duration; break;
                case 'care':    totalCareHours += duration; break;
            }
        }

        const avgMealPerDay = totalMealHours / 7;
        const avgSleepPerDay = totalSleepHours / 7;

        // ── Meal check ──
        if (avgMealPerDay < 1.0) {
            results.push({ icon: '⚠️', text: 'You\'re averaging <strong>less than 1 hour/day</strong> for meals. You need to be eating more! Try blocking at least 1.5 hours for meals each day.', level: 'bad' });
        } else if (avgMealPerDay < 1.5) {
            results.push({ icon: '⚡', text: 'Meal time is tight at <strong>' + avgMealPerDay.toFixed(1) + ' hrs/day</strong>. Consider adding a bit more time for eating.', level: 'warn' });
        } else {
            results.push({ icon: '✅', text: 'Meal time looks good at <strong>' + avgMealPerDay.toFixed(1) + ' hrs/day</strong>.', level: 'good' });
        }

        // ── Sleep check ──
        if (avgSleepPerDay < 6) {
            results.push({ icon: '🔴', text: 'You\'re averaging <strong>' + avgSleepPerDay.toFixed(1) + ' hrs</strong> of sleep. That\'s not enough — aim for 7–9 hours!', level: 'bad' });
        } else if (avgSleepPerDay < 7) {
            results.push({ icon: '🟡', text: 'Sleep is <strong>' + avgSleepPerDay.toFixed(1) + ' hrs/night</strong>. Try to get at least 7 hours.', level: 'warn' });
        } else if (avgSleepPerDay > 10) {
            results.push({ icon: '🟡', text: 'Sleep is <strong>' + avgSleepPerDay.toFixed(1) + ' hrs/night</strong>. That\'s a lot — maybe too much?', level: 'warn' });
        } else {
            results.push({ icon: '✅', text: 'Sleep is healthy at <strong>' + avgSleepPerDay.toFixed(1) + ' hrs/night</strong>.', level: 'good' });
        }

        // Skipped meal days
        const skippedMealDays = dailyMeals.map((h, i) => h < 0.25 ? dayNames[i] : null).filter(Boolean);
        if (skippedMealDays.length > 0) {
            results.push({ icon: '🍽️', text: 'No meals scheduled on: <strong>' + skippedMealDays.join(', ') + '</strong>. Don\'t skip meals!', level: 'warn' });
        }

        // ── Per-course study & office-hours check ──
        let totalExpectedStudy = 0;
        let totalExpectedOH = 0;
        const ohWarnings = [];

        for (const course of this.courses) {
            const cr = course.credits || 3;
            const outsidePerCr = this._outsidePerCredit(course.mode || 'lecture');
            const mult = this._difficultyMultiplier(course.difficulty);
            const expectedStudy = cr * outsidePerCr * mult;
            totalExpectedStudy += expectedStudy;

            const expectedOH = this._expectedOfficeHours(course.difficulty);
            totalExpectedOH += expectedOH;

            // Check for office hours events for this course
            if (expectedOH > 0) {
                const ohEvents = this.events.filter(ev => {
                    if (ev.type === 'office') return true; // explicitly typed as office hours
                    if (ev.type !== 'study') return false;
                    const title = (ev.title || '').toLowerCase();
                    const notes = (ev.notes || '').toLowerCase();
                    return (title.includes('office') || notes.includes('office') || title.includes('oh '));
                });
                const ohScheduled = ohEvents.reduce((sum, ev) => sum + (ev.endHour - ev.startHour), 0);
                if (ohScheduled < expectedOH * 0.5) {
                    ohWarnings.push(`${course.code} (need ${expectedOH}h office hrs, have ${ohScheduled.toFixed(1)}h)`);
                }
            }
        }

        // Study hours check
        if (this.courses.length > 0) {
            const diffStr = totalStudyHours >= totalExpectedStudy * 0.9 ? 'good' :
                            totalStudyHours >= totalExpectedStudy * 0.5 ? 'warn' : 'bad';
            const diffIcon = diffStr === 'good' ? '✅' : diffStr === 'warn' ? '⚡' : '⚠️';

            let studyDetail = '';
            for (const course of this.courses) {
                const cr = course.credits || 3;
                const exp = cr * this._outsidePerCredit(course.mode || 'lecture') * this._difficultyMultiplier(course.difficulty);
                studyDetail += `${course.code}: ${exp.toFixed(1)}h/wk expected · `;
            }
            studyDetail = studyDetail.replace(/ · $/, '');

            results.push({
                icon: diffIcon,
                text: `Outside study: <strong>${totalStudyHours.toFixed(1)}h scheduled</strong> vs ${totalExpectedStudy.toFixed(1)}h expected (${studyDetail})`,
                level: diffStr
            });
        }

        // Office hours check
        if (ohWarnings.length > 0) {
            results.push({
                icon: '🏫',
                text: '<strong>Missing office hours:</strong> ' + ohWarnings.join('; ') + '. Schedule study blocks with "Office Hours" in the title tied to each course.',
                level: 'warn'
            });
        } else if (totalExpectedOH > 0) {
            results.push({ icon: '✅', text: 'Office hours are scheduled for all courses that need them.', level: 'good' });
        }

        // Class hours summary
        if (this.courses.length > 0) {
            const modeLabels = { lecture: 'Lecture', lab: 'Lab', studio: 'Studio' };
            const courseSummary = this.courses.map(c => {
                const m = modeLabels[c.mode] || 'Lecture';
                return `${c.code} (${m}, ${c.credits || 3}cr, ${c.difficulty})`;
            }).join(' · ');
            results.push({ icon: '📚', text: '<strong>Courses:</strong> ' + courseSummary, level: 'good' });
        }

        // Work-life balance
        const busyHours = totalClassHours + totalWorkHours + totalStudyHours;
        if (busyHours > 70) {
            results.push({ icon: '😰', text: 'You\'re scheduled for <strong>' + busyHours.toFixed(0) + ' hrs/week</strong> of class + work + study. This may be unsustainable.', level: 'bad' });
        } else if (busyHours > 55) {
            results.push({ icon: '💪', text: 'Busy schedule: <strong>' + busyHours.toFixed(0) + ' hrs/week</strong> of class + work + study. Make sure to protect your free time.', level: 'warn' });
        }

        // Credit load check
        const totalCredits = this.courses.reduce((sum, c) => sum + (c.credits || 3), 0);
        if (totalCredits > 18) {
            results.push({ icon: '📚', text: `<strong>${totalCredits} credits</strong> exceeds the standard 18cr max. This is a heavy load — make sure you can handle it.`, level: 'warn' });
        } else if (totalCredits > 15 && this.workSettings.active && this.workSettings.plannedHours > 10) {
            results.push({ icon: '📚', text: `<strong>${totalCredits} credits + ${this.workSettings.plannedHours}h work</strong> is a lot to juggle. Consider reducing one or the other.`, level: 'warn' });
        } else if (totalCredits >= 12) {
            results.push({ icon: '✅', text: `<strong>${totalCredits} credits</strong> — solid full-time load.`, level: 'good' });
        } else if (totalCredits > 0) {
            results.push({ icon: '⚡', text: `Only <strong>${totalCredits} credits</strong> — make sure you're meeting full-time status (12cr minimum).`, level: 'warn' });
        }

        // Work hours check — compare scheduled vs planned
        if (this.workSettings.active && this.workSettings.plannedHours > 0) {
            const planned = this.workSettings.plannedHours;
            if (planned > 20) {
                results.push({ icon: '⚡', text: `You plan to work <strong>${planned}h/week</strong> while studying full-time. The recommended max is 20h — watch for burnout.`, level: 'warn' });
            }
            if (totalWorkHours === 0) {
                results.push({ icon: '💼', text: `You said you work ${planned}h/week but <strong>no work blocks</strong> are scheduled. Use the Work Shift quick-add to place them.`, level: 'warn' });
            } else if (totalWorkHours < planned * 0.5) {
                results.push({ icon: '💼', text: `Only <strong>${totalWorkHours.toFixed(1)}h</strong> scheduled vs <strong>${planned}h</strong> planned. Add more work blocks.`, level: 'warn' });
            } else if (totalWorkHours < planned * 0.9) {
                results.push({ icon: '💼', text: `<strong>${totalWorkHours.toFixed(1)}h</strong> scheduled vs <strong>${planned}h</strong> planned — getting close, add a bit more.`, level: 'warn' });
            } else if (totalWorkHours <= planned * 1.1) {
                results.push({ icon: '✅', text: `Work hours match: <strong>${totalWorkHours.toFixed(1)}h</strong> scheduled ≈ <strong>${planned}h</strong> planned.`, level: 'good' });
            } else {
                results.push({ icon: '💼', text: `<strong>${totalWorkHours.toFixed(1)}h</strong> scheduled but only <strong>${planned}h</strong> planned — you're over-scheduled.`, level: 'warn' });
            }
        }

        // Exercise check
        if (totalExerciseHours < 1) {
            results.push({ icon: '🏃', text: 'No exercise scheduled. Try adding at least <strong>2–3 hours/week</strong> for physical activity.', level: 'warn' });
        }

        // Club activity check — 3 hours/week minimum
        if (totalClubHours < 1) {
            results.push({ icon: '🏛️', text: 'No club activities scheduled. All students need <strong>at least 3 hours/week</strong> of club/activity time.', level: 'bad' });
        } else if (totalClubHours < 3) {
            results.push({ icon: '🏛️', text: 'Only <strong>' + totalClubHours.toFixed(1) + 'h</strong> of club activities — need <strong>at least 3 hours/week</strong>. Add more!', level: 'warn' });
        } else {
            results.push({ icon: '✅', text: 'Club activity requirement met at <strong>' + totalClubHours.toFixed(1) + ' hrs/week</strong>.', level: 'good' });
        }

        // Free time check — at least 1.5h/day on weekdays
        const lowFreeDays = [];
        for (let d = 0; d < 5; d++) {
            const freeH = this.events
                .filter(ev => ev.day === d && ev.type === 'free')
                .reduce((sum, ev) => sum + (ev.endHour - ev.startHour), 0);
            if (freeH < 1.5) lowFreeDays.push(`${dayNames[d]} (${freeH.toFixed(1)}h)`);
        }
        if (lowFreeDays.length >= 3) {
            results.push({ icon: '😰', text: '<strong>Very little free time:</strong> ' + lowFreeDays.join(', ') + '. You need downtime — aim for at least 1.5h/day.', level: 'bad' });
        } else if (lowFreeDays.length > 0) {
            results.push({ icon: '⚡', text: 'Low free time on: <strong>' + lowFreeDays.join(', ') + '</strong>. Try to protect at least 1.5h/day for yourself.', level: 'warn' });
        } else {
            results.push({ icon: '✅', text: 'Free time looks healthy — at least 1.5h every weekday.', level: 'good' });
        }

        // Personal care check — at least 0.5h/day
        const lowCareDays = [];
        for (let d = 0; d < 7; d++) {
            const careH = this.events
                .filter(ev => ev.day === d && ev.type === 'care')
                .reduce((sum, ev) => sum + (ev.endHour - ev.startHour), 0);
            if (careH < 0.5) lowCareDays.push(dayNames[d]);
        }
        if (lowCareDays.length >= 3) {
            results.push({ icon: '🚿', text: '<strong>Personal care missing on:</strong> ' + lowCareDays.join(', ') + '. Schedule at least 30 min/day for showering, getting ready, etc.', level: 'bad' });
        } else if (lowCareDays.length > 0) {
            results.push({ icon: '🚿', text: 'No personal care on <strong>' + lowCareDays.join(', ') + '</strong>. Even 30 minutes matters.', level: 'warn' });
        } else {
            results.push({ icon: '✅', text: 'Personal care scheduled every day.', level: 'good' });
        }

        // Late-night academic work — no study/class/office after 9 PM on weekdays
        const academicTypes = ['class', 'study', 'office'];
        const lateNight = this.events.filter(ev =>
            ev.day < 5 && academicTypes.includes(ev.type) && ev.endHour > 21
        );
        if (lateNight.length > 0) {
            const lateList = lateNight.map(ev => `${ev.title} (ends ${this._formatTimeRange(ev.startHour, ev.endHour)})`).join('; ');
            results.push({ icon: '🌙', text: '<strong>Late-night academic work:</strong> ' + lateList + '. Studying after 9 PM hurts sleep quality — try to finish earlier.', level: 'warn' });
        } else {
            results.push({ icon: '✅', text: 'No academic work scheduled after 9 PM on weekdays.', level: 'good' });
        }

        // Marathon study session check
        const focusTypes = ['study', 'office'];
        const marathonWarnings = [];
        for (let d = 0; d < 7; d++) {
            const dayEvents = this.events
                .filter(ev => ev.day === d && academicTypes.includes(ev.type))
                .sort((a, b) => a.startHour - b.startHour);

            // Check solo long blocks (>2h study/office)
            for (const ev of dayEvents) {
                if (focusTypes.includes(ev.type) && ev.endHour - ev.startHour > 2) {
                    marathonWarnings.push(`${dayNames[d]}: ${(ev.endHour - ev.startHour).toFixed(1)}h ${ev.title}`);
                }
            }

            if (dayEvents.length < 2) continue;

            let sessionStart = dayEvents[0].startHour;
            let sessionEnd = dayEvents[0].endHour;
            let hasFocus = focusTypes.includes(dayEvents[0].type);
            for (let i = 1; i < dayEvents.length; i++) {
                const gap = dayEvents[i].startHour - sessionEnd;
                if (gap <= 0.25) { // ≤15 min gap = continuous
                    sessionEnd = Math.max(sessionEnd, dayEvents[i].endHour);
                    if (focusTypes.includes(dayEvents[i].type)) hasFocus = true;
                } else {
                    if (hasFocus && sessionEnd - sessionStart > 2) {
                        marathonWarnings.push(`${dayNames[d]}: ${(sessionEnd - sessionStart).toFixed(1)}h continuous`);
                    }
                    sessionStart = dayEvents[i].startHour;
                    sessionEnd = dayEvents[i].endHour;
                    hasFocus = focusTypes.includes(dayEvents[i].type);
                }
            }
            if (hasFocus && sessionEnd - sessionStart > 2) {
                marathonWarnings.push(`${dayNames[d]}: ${(sessionEnd - sessionStart).toFixed(1)}h continuous`);
            }
        }
        if (marathonWarnings.length > 0) {
            results.push({ icon: '🧠', text: '<strong>Marathon sessions detected:</strong> ' + marathonWarnings.join('; ') + '. Schedule at least a 15-minute break every 2 hours!', level: 'warn' });
        } else if (this.events.some(ev => academicTypes.includes(ev.type))) {
            results.push({ icon: '✅', text: 'No marathon study sessions — all academic blocks have breaks within 2 hours.', level: 'good' });
        }

        // Conflict check
        const conflictPairs = [];
        for (let i = 0; i < this.events.length; i++) {
            for (let j = i + 1; j < this.events.length; j++) {
                if (this.events[i].day === this.events[j].day &&
                    this.events[i].startHour < this.events[j].endHour &&
                    this.events[j].startHour < this.events[i].endHour) {
                    conflictPairs.push([this.events[i], this.events[j]]);
                }
            }
        }
        if (conflictPairs.length > 0) {
            const conflictList = conflictPairs.map(([a, b]) => `${a.title} ⇄ ${b.title}`).join('; ');
            results.push({ icon: '🔴', text: `<strong>${conflictPairs.length} time conflict(s):</strong> ${conflictList}. Resolve by moving or deleting one of each pair.`, level: 'bad' });
        } else {
            results.push({ icon: '✅', text: 'No time conflicts — all events are properly spaced.', level: 'good' });
        }

        // Summary
        results.push({
            icon: '📊',
            text: `<strong>Weekly breakdown:</strong> Classes ${totalClassHours.toFixed(1)}h · Study ${totalStudyHours.toFixed(1)}h · Work ${totalWorkHours.toFixed(1)}h · Meals ${totalMealHours.toFixed(1)}h · Sleep ${totalSleepHours.toFixed(1)}h · Personal ${totalCareHours.toFixed(1)}h · Exercise ${totalExerciseHours.toFixed(1)}h · Clubs ${totalClubHours.toFixed(1)}h · Free ${totalFreeHours.toFixed(1)}h`,
            level: 'good'
        });

        // Render results
        let html = '';
        for (const r of results) {
            html += `<div class="wellness-item wellness-${r.level}"><span>${r.icon}</span> <span>${r.text}</span></div>`;
        }
        this.els.wellnessResults.innerHTML = html;
        this.els.wellnessResults.classList.remove('hidden');
    }

    // ═══════════════════════════════════════════
    //  EXPORT / IMPORT
    // ═══════════════════════════════════════════
    _preparePrint() {
        // Re-render events at print scale with percentage positioning
        const savedHourH = this.HOUR_HEIGHT;
        this.HOUR_HEIGHT = 40;
        this._printing = true;
        this._renderEvents();

        const el = document.getElementById('print-wellness');
        if (!el) { this.HOUR_HEIGHT = savedHourH; return; }

        // Quick wellness summary
        const totalCredits = this.courses.reduce((s, c) => s + (c.credits || 3), 0);
        let workH = 0, mealH = 0, sleepH = 0, studyH = 0, classH = 0, freeH = 0;
        let exerciseH = 0, clubH = 0, careH = 0;
        for (const ev of this.events) {
            const d = ev.endHour - ev.startHour;
            if (ev.type === 'work') workH += d;
            if (ev.type === 'meal') mealH += d;
            if (ev.type === 'sleep') sleepH += d;
            if (ev.type === 'study' || ev.type === 'office') studyH += d;
            if (ev.type === 'class') classH += d;
            if (ev.type === 'free') freeH += d;
            if (ev.type === 'exercise') exerciseH += d;
            if (ev.type === 'club') clubH += d;
            if (ev.type === 'care') careH += d;
        }

        // Late-night academic check
        const academicTypes = ['class', 'study', 'office'];
        const lateNight = this.events.filter(ev =>
            ev.day < 5 && academicTypes.includes(ev.type) && ev.endHour > 21
        );

        // Free time check (weekdays)
        let lowFreeDays = 0;
        for (let d = 0; d < 5; d++) {
            const fh = this.events.filter(ev => ev.day === d && ev.type === 'free')
                .reduce((s, ev) => s + (ev.endHour - ev.startHour), 0);
            if (fh < 1.5) lowFreeDays++;
        }

        let conflicts = 0;
        for (let i = 0; i < this.events.length; i++)
            for (let j = i + 1; j < this.events.length; j++)
                if (this.events[i].day === this.events[j].day && this.events[i].startHour < this.events[j].endHour && this.events[j].startHour < this.events[i].endHour)
                    conflicts++;

        el.innerHTML = [
            `<strong>Credits:</strong> ${totalCredits}cr`,
            `<strong>Class:</strong> ${classH.toFixed(0)}h`,
            `<strong>Study:</strong> ${studyH.toFixed(0)}h`,
            `<strong>Work:</strong> ${workH.toFixed(0)}h`,
            `<strong>Sleep:</strong> ${sleepH.toFixed(0)}h`,
            `<strong>Meals:</strong> ${mealH.toFixed(0)}h`,
            `<strong>Free:</strong> ${freeH.toFixed(0)}h`,
            `<strong>Exercise:</strong> ${exerciseH.toFixed(0)}h`,
            `<strong>Clubs:</strong> ${clubH.toFixed(0)}h`,
            mealH < 10 ? '<span style="color:#991B1B;">⚠ Meals &lt;10h</span>' : '<span style="color:#2E7D32;">✓ Meals</span>',
            sleepH < 49 ? '<span style="color:#991B1B;">⚠ Sleep &lt;7h/d</span>' : '<span style="color:#2E7D32;">✓ Sleep</span>',
            studyH < totalCredits * 1.5 ? '<span style="color:#991B1B;">⚠ Study low</span>' : '<span style="color:#2E7D32;">✓ Study</span>',
            this.workSettings.active && workH > 20 ? '<span style="color:#991B1B;">⚠ Work &gt;20h</span>' : '',
            exerciseH < 2 ? '<span style="color:#991B1B;">⚠ Exercise &lt;2h</span>' : '<span style="color:#2E7D32;">✓ Exercise</span>',
            clubH < 3 ? '<span style="color:#991B1B;">⚠ Clubs &lt;3h</span>' : '<span style="color:#2E7D32;">✓ Clubs</span>',
            lateNight.length > 0 ? `<span style="color:#991B1B;">⚠ Late study</span>` : '<span style="color:#2E7D32;">✓ No late nights</span>',
            lowFreeDays >= 3 ? '<span style="color:#991B1B;">⚠ Low free time</span>' : '<span style="color:#2E7D32;">✓ Free time</span>',
            conflicts > 0 ? `<span style="color:#991B1B;">⚠ ${conflicts} conflicts</span>` : '<span style="color:#2E7D32;">✓ No conflicts</span>',
        ].filter(Boolean).join(' &nbsp;|&nbsp; ') + ' &nbsp;|&nbsp; <em>☐ = done</em>';

        // Restore after print
        setTimeout(() => {
            this.HOUR_HEIGHT = savedHourH;
            this._printing = false;
            this._renderEvents();
        }, 500);
    }

    _exportData() {
        const data = {
            version: 1,
            exportedAt: new Date().toISOString(),
            events: this.events,
            courses: this.courses,
            workSettings: this.workSettings,
            eventIdCounter: this.eventIdCounter,
        };

        const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);

        const a = document.createElement('a');
        a.href = url;
        a.download = `schedule-${this._formatDate(this.currentWeekStart)}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }

    _importData(e) {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();

        reader.onerror = () => {
            alert('Failed to read file. Make sure it is a valid JSON file.');
            e.target.value = '';
        };

        reader.onload = (ev) => {
            try {
                const raw = ev.target.result;
                const data = JSON.parse(raw);

                if (!data.events || !Array.isArray(data.events)) {
                    throw new Error('File does not contain a valid schedule (missing events array).');
                }

                // Validate event fields
                for (const ev of data.events) {
                    if (typeof ev.day !== 'number' || typeof ev.startHour !== 'number' || typeof ev.endHour !== 'number') {
                        throw new Error('Events in file are missing required fields (day, startHour, endHour).');
                    }
                }

                this.events = data.events;
                // Lock events that are linked to courses
                for (const ev of this.events) {
                    if (ev.courseId != null) ev.locked = true;
                }
                this.courses = data.courses || [];
                this.workSettings = data.workSettings || { active: false, plannedHours: 15 };
                this.eventIdCounter = Math.max(data.eventIdCounter || 0, this.events.length);

                // Restore work toggle UI
                if (this.workSettings.active) {
                    this.els.workToggle.checked = true;
                    this.els.workDetails.classList.remove('hidden');
                    this.els.workHours.value = this.workSettings.plannedHours || 15;
                } else {
                    this.els.workToggle.checked = false;
                    this.els.workDetails.classList.add('hidden');
                }

                this._renderAll();
            } catch (err) {
                console.error('[import] Failed:', err);
                alert('Could not import file: ' + err.message);
            }
            e.target.value = '';
        };

        reader.readAsText(file);
    }

    _clearAll() {
        if (confirm('Delete ALL events and courses? This cannot be undone.')) {
            this.events = [];
            this.courses = [];
            this.workSettings = { active: false, plannedHours: 15 };
            this.els.workToggle.checked = false;
            this.els.workDetails.classList.add('hidden');
            this._renderAll();
        }
    }

    // ═══════════════════════════════════════════
    //  UTILITIES
    // ═══════════════════════════════════════════
    _mondayOfWeek(date) {
        const d = new Date(date);
        const day = d.getDay(); // 0=Sun
        const diff = day === 0 ? -6 : 1 - day;
        d.setDate(d.getDate() + diff);
        d.setHours(0, 0, 0, 0);
        return d;
    }

    _navigateWeek(delta) {
        const d = new Date(this.currentWeekStart);
        d.setDate(d.getDate() + delta * 7);
        this.currentWeekStart = d;
        this._renderAll();
    }

    _parseDays(daysStr) {
        const map = { 'M': 0, 'T': 1, 'W': 2, 'Th': 3, 'F': 4, 'Sa': 5, 'Su': 6 };
        const days = [];
        // Handle multi-char codes first
        const tokens = daysStr.match(/Th|Sa|Su|M|T|W|F/g) || [];
        for (const t of tokens) {
            if (map[t] !== undefined) days.push(map[t]);
        }
        return days;
    }

    _timeToDecimal(timeStr) {
        const [h, m] = timeStr.split(':').map(Number);
        return h + m / 60;
    }

    _decimalToTimeString(dec) {
        const h = Math.floor(dec);
        const m = Math.round((dec - h) * 60);
        return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`;
    }

    _formatTimeRange(startH, endH) {
        const fmt = h => {
            const hr = Math.floor(h);
            const mn = Math.round((h - hr) * 60);
            const period = hr < 12 ? 'AM' : 'PM';
            const display = hr === 0 ? 12 : hr > 12 ? hr - 12 : hr;
            return mn === 0 ? `${display} ${period}` : `${display}:${String(mn).padStart(2, '0')} ${period}`;
        };
        return `${fmt(startH)} – ${fmt(endH)}`;
    }

    _formatDate(date) {
        return date.toISOString().split('T')[0];
    }

    _escHtml(str) {
        const div = document.createElement('div');
        div.textContent = str;
        return div.innerHTML;
    }
}

// ═══════════════════════════════════════════
//  BOOT
// ═══════════════════════════════════════════
document.addEventListener('DOMContentLoaded', () => {
    window.calendarApp = new CalendarApp();
});

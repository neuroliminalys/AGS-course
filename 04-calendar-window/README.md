# Module 04 — Clock-triggered calendar window

## Objective

Create a second window, control its visibility, and learn the GTK Calendar API.

## Reading

- GTK Calendar: <https://docs.gtk.org/gtk4/class.Calendar.html>
- Astal Window: <https://aylur.github.io/libastal/astal4/class.Window.html>
- AGS application/window concepts:
  <https://aylur.github.io/ags/guide/first-widgets.html>

## Exercise 1 — Visibility before content

Create a second, initially hidden Astal window. Toggle it from a temporary test
button before adding a calendar.

Investigate:

- Unique window names
- Layer and anchor choices
- Keyboard mode
- Closing on a second click
- Closing on Escape

## Exercise 2 — GTK Calendar

Place `Gtk.Calendar` in the window. Explore its properties and signals before
styling it.

Tasks:

1. Log the selected date.
2. Toggle weekday names and week numbers.
3. Observe month navigation signals.
4. Mark one day.
5. Inspect its CSS nodes with the GTK inspector.

## Design question

Wayland does not give applications browser-like absolute placement. Decide
whether the calendar should be centered below the clock, aligned to a screen
edge, or implemented later using another popup primitive.

## Checkpoint

- Clock toggles a separate window.
- Only one calendar window exists.
- GTK Calendar is interactive.
- Visibility state remains consistent after repeated clicks.


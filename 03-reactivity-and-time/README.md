# Module 03 — Reactivity and time

## Objective

Learn Accessors, writable state, computed values, and periodic updates without
involving external services.

## Reading

- AGS state management:
  <https://aylur.github.io/ags/guide/first-widgets.html#state-management>
- AGS utilities: <https://aylur.github.io/ags/guide/utilities.html>
- `Intl.DateTimeFormat`:
  <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat>

## Exercise 1 — Reactive toggle

Complete `ReactiveButton.tsx`. One state value should control both the visible
label and a CSS class.

Questions:

1. What is the difference between an Accessor and its current value?
2. Why is the Accessor called inside a computed function?
3. When should state live inside versus outside a component?

## Exercise 2 — Clock

Complete `Clock.tsx` using JavaScript dates. Do not execute the external `date`
program.

Create two computed labels:

- A long date, such as `Monday 3rd May`
- A time, such as `09:13`

Write the ordinal suffix function separately and test 1, 2, 3, 4, 11, 12, 13,
21, 22, and 23.

## Stretch exercise

Align the update to the next exact minute instead of updating every 60 seconds
from application startup.

## Checkpoint

- A button changes label and class reactively.
- The clock updates without restarting AGS.
- Date formatting respects your locale decision.
- No blocking process execution is used.


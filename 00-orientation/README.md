# Module 00 — Orientation and setup

## Objective

Understand the toolchain and create a clean AGS TypeScript environment before
building desktop-shell components.

## Concepts

- GTK provides widgets.
- Astal provides desktop-shell and backend libraries.
- Gnim provides reactive state and TSX integration.
- AGS provides the application tooling and convenient project setup.
- GJS is not Node.js.

## Reading

- AGS quick start: <https://aylur.github.io/ags/guide/quick-start.html>
- Astal introduction: <https://aylur.github.io/astal/guide/introduction>
- AGS migration guide: <https://aylur.github.io/ags/guide/migration-guide.html>

## Exercise 1 — Inventory

Record the installed versions in the root `NOTES.md`. Confirm that your editor
resolves imports from `ags` and provides types for GTK.

Questions:

1. Which AGS major generation are you using?
2. Does your installation support GTK4?
3. Which package owns the `ags` executable on your system?
4. Can the default initialized example run under your Niri session?

## Exercise 2 — Recognize outdated material

Classify examples found online. Current examples commonly import from
`ags/gtk4`, while older examples often use global `Widget`, `App`, `Service`,
and `Utils` objects.

Do not translate an old configuration yet. The goal is to recognize incompatible
generations before investing time in them.

## Checkpoint

- An initialized AGS project runs.
- TypeScript types work in the editor.
- You can explain the difference between AGS, Astal, GTK, and GJS.
- You can identify an old AGS tutorial.


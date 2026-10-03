# Module 05 — Workspace view model

## Objective

Build and test the workspace UI using fake data before connecting it to Niri.

## Reading

- AGS dynamic rendering and migration notes:
  <https://aylur.github.io/ags/guide/migration-guide.html>
- AGS FAQ: <https://aylur.github.io/ags/guide/faq.html>
- Niri workspace overview:
  <https://github.com/niri-wm/niri/wiki/Workspaces>

## Why a view model?

Niri's protocol represents compositor state. Your UI needs a smaller and more
stable representation. The adapter between them is the only place that should
understand both shapes.

## Exercise 1 — Types and fixtures

Review `types.ts` and extend the fixtures to cover:

- Focused and occupied
- Occupied but not focused
- Empty
- Named workspace
- Another output

Decide whether `index` or `id` is the correct identity for UI actions.

## Exercise 2 — Reactive list

Render the fixture array using AGS dynamic-list primitives. Do not manually
create exactly four buttons.

Each button should derive:

- Label
- CSS state classes
- Tooltip
- Clicked workspace identity

## Exercise 3 — Mutations

Use local test controls to:

1. Add a workspace.
2. Remove a workspace.
3. Change focus.
4. Move one to another output.

## Checkpoint

- The list supports an arbitrary number of workspaces.
- State is visible through classes.
- Components do not contain Niri command strings.
- Fake state changes update without rebuilding the entire application.

# Module 02 — Layout and GTK CSS

## Objective

Reproduce the prototype's structure using static placeholders while keeping the
visual center stable.

## Reading

- AGS theming: <https://aylur.github.io/ags/guide/theming.html>
- GTK CSS overview: <https://docs.gtk.org/gtk4/css-overview.html>
- GTK `CenterBox`: <https://docs.gtk.org/gtk4/class.CenterBox.html>
- GTK `Box`: <https://docs.gtk.org/gtk4/class.Box.html>

## Exercise 1 — Three regions

Complete `starter/Bar.tsx` using a center-oriented container. Add uneven numbers
of modules to the left and right. The center content should remain visually
centered.

Use placeholders for every future backend:

- Home
- CPU/GPU/RAM
- Workspaces
- Clock
- Media
- Tray and system controls

## Exercise 2 — Class-based styling

Use CSS classes rather than large inline style strings. Define shared `Module`
styling and modifiers such as `compact`, `active`, or `muted`.

GTK layout properties are not CSS properties. For example, the distance between
children of a `Gtk.Box` is configured on the widget with `spacing={8}`. Use CSS
for visual styling such as colors, padding, borders, and typography.

## Exercise 3 — Width pressure

The normal bar is anchored to both the left and right screen edges, so Niri
forces it to use the monitor's full width. To test a narrower allocation,
temporarily change the wrapper window from Module 01:

1. Remove the `RIGHT` anchor, keeping only `TOP | LEFT`.
2. Set `defaultWidth={900}` on the `<window>`.
3. Repeat with widths such as 1200, 900, and 700 pixels.
4. Restore the `RIGHT` anchor and remove `defaultWidth` after the exercise.

`defaultWidth` is a `Gtk.Window` property, not CSS. It provides a test window
size when layer-shell anchoring is not already forcing the width. If the child
widgets have a larger minimum size, GTK may still allocate more than the
requested default.

Record which content should degrade first.
Suggested order:

1. Truncate media title.
2. Remove verbose labels from controls.
3. Hide optional monitor labels.
4. Preserve workspaces and the clock.

## Checkpoint

- The bar resembles the prototype structurally.
- The center remains stable with asymmetric side content.
- Repeated modules share CSS.
- No live services are involved.

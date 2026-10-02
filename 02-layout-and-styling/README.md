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

## Exercise 3 — Width pressure

Temporarily reduce the window width. Record which content should degrade first.
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


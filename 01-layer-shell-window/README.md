# Module 01 — A layer-shell window

## Objective

Create a visible top bar that reserves screen space in Niri. Do not add real bar
modules yet.

## Reading

- AGS first widgets: <https://aylur.github.io/ags/guide/first-widgets.html>
- AGS intrinsic elements: <https://aylur.github.io/ags/guide/intrinsics.html>
- Astal Window reference: <https://aylur.github.io/libastal/astal4/class.Window.html>
- Niri layer-shell components:
  <https://github.com/niri-wm/niri/blob/main/docs/wiki/Layer-Shell-Components.md>

## Vocabulary

- **Anchor:** the screen edges to which a surface attaches.
- **Exclusive zone:** space the compositor reserves for the surface.
- **Namespace:** an identifier useful to compositors and layer rules.
- **GDK monitor:** GTK's monitor object; do not assume its numeric position is a
  Niri output index.

## Exercise 1 — Visible window

Open `starter/app.tsx` and complete its TODOs. Begin with static text. Your window
should be visible and attached across the top edge.

Experiment deliberately:

1. Remove `visible` and observe GTK4 behavior.
2. Anchor only to the top and compare its width.
3. Add left and right anchors.
4. Toggle exclusivity and observe how Niri places tiled windows.

## Exercise 2 — Transparent outer window

Create an outer layer-shell window and an inner visible surface. This is needed
for the floating rounded appearance from the prototype.

```text
transparent window
└── spacing
    └── visible rounded surface
```

Do not solve the three-region layout in this module.

## Checkpoint

- The bar is on the correct edge.
- It spans the desired width.
- Niri reserves space for it.
- The outer margin is transparent.
- Stopping AGS removes the reserved space.


# Module 07 — Matugen, semantic colors, and light mode

## Objective

Generate a replaceable color layer while keeping layout and component styling
handwritten and stable.

## Reading

- Matugen usage: <https://github.com/InioX/matugen/wiki/Usage>
- Matugen repository: <https://github.com/InioX/Matugen>
- AGS theming: <https://aylur.github.io/ags/guide/theming.html>
- GTK CSS overview: <https://docs.gtk.org/gtk4/css-overview.html>

## Architecture

```text
wallpaper or source color
          ↓
       Matugen
          ↓
generated-colors.css
          ↓
       theme.css
          ↓
      components
```

Generated files are outputs. Never put carefully handwritten layout rules in a
file Matugen overwrites.

## Exercise 1 — Semantic contract

Define stable roles:

- `bar_bg`
- `module_bg`
- `main_text`
- `muted_text`
- `accent`
- `on_accent`
- `outline`
- `warning`
- `critical`

Components use these roles without knowing whether the active theme is light or
dark.

## Exercise 2 — Matugen template

Complete `starter/ags-colors.css.template`. Consult your installed Matugen
version for exact template syntax and available palette keywords rather than
copying assumptions.

Generate palettes from:

1. A fixed blue source color.
2. A yellow source color.
3. A low-saturation wallpaper.
4. A vivid wallpaper.
5. Light mode and dark mode.

## Exercise 3 — Accent as main text

Create two mappings:

- Experimental: main text uses an accent-derived tone.
- Conventional: main text uses an on-surface tone.

Compare clock, inactive workspace, popup content, and disabled controls. Keep
the mapping swappable without editing component CSS.

## Exercise 4 — Reload strategy

Begin by restarting AGS after generation. Only after that is reliable, explore
file monitoring and runtime CSS reload. Read AGS's warning about applying CSS on
top of previously applied styles.

## Checkpoint

- The bar has a fallback palette.
- Light and dark modes export the same semantic names.
- A Matugen run changes color but not layout.
- Main text remains readable across the test palette.
- Generated output is ignored by version control.


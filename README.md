# AGS Learning Course

This repository is a guided course for building a personal desktop bar with
current-generation AGS, Gnim, GTK4, Astal, Niri, and Matugen.

It is intentionally **not a finished bar**. The starter files contain TODOs,
small experiments, incomplete functions, and design questions. You should make
each exercise work before copying ideas into the capstone.

## Target design

The course gradually builds toward this component tree:

```text
Bar
├── LeftSection
│   ├── Home
│   └── future system metrics
├── CenterSection
│   ├── NiriWorkspaces
│   ├── Clock
│   └── future media widget
├── RightSection
│   └── future system controls
└── CalendarWindow
```

## How to use the course

1. Read one module's `README.md` completely.
2. Copy or edit the files under its `starter/` directory.
3. Complete the TODOs without looking for a complete bar configuration.
4. Run the checkpoint tests described in the lesson.
5. Write what you learned in `NOTES.md`.
6. Continue only when the checkpoint is stable.

The exercises are independent learning sandboxes. They are not all expected to
compile together. The final capstone is where you decide which pieces to bring
together.

## Modules

| Module                    | Main concept                        | Result                            |
| ------------------------- | ----------------------------------- | --------------------------------- |
| `00-orientation`          | AGS versions and project setup      | A verified local setup            |
| `01-layer-shell-window`   | Astal windows and Wayland layers    | An exclusive bar window           |
| `02-layout-and-styling`   | GTK containers and CSS              | A static three-region mock bar    |
| `03-reactivity-and-time`  | Accessors and derived state         | A reactive button and clock       |
| `04-calendar-window`      | Multiple windows and GTK Calendar   | A toggled calendar window         |
| `05-workspace-view-model` | Types and dynamic lists             | Workspaces rendered from fixtures |
| `06-niri-ipc`             | JSON, subprocesses, and events      | A Niri-backed state layer         |
| `07-matugen-theming`      | Semantic colors and light/dark mode | Generated theme inputs            |
| `08-capstone`             | Integration and lifecycle           | Your own bar architecture         |

## Version warning

This course targets the current AGS style documented at
<https://aylur.github.io/ags/>. Examples using global `Widget`, `App`,
`Service`, `Utils`, or `Variable` are from older AGS generations and should not
be mixed with these exercises.

Useful references:

- AGS: <https://aylur.github.io/ags/>
- Astal: <https://aylur.github.io/astal/>
- GTK4: <https://docs.gtk.org/gtk4/>
- Niri IPC: <https://github.com/niri-wm/niri/blob/main/docs/wiki/IPC.md>
- Matugen: <https://github.com/InioX/matugen/wiki>

## Learning rule

When something fails, reduce it to the smallest exercise that demonstrates the
problem. Do not debug Niri, Matugen, GTK layout, and reactive state at the same
time.

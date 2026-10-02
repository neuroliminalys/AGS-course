# Debugging checklist

| Symptom | Inspect first |
|---|---|
| Window is invisible | GTK4 `visible`, child size, startup errors |
| Bar behaves like a regular window | Wayland backend and Astal window type |
| Tiled windows cover the bar | Anchors and exclusivity |
| Center shifts sideways | Container choice and child expansion |
| Label does not update | Accessor read, computed dependencies, timer lifetime |
| Workspace list is stale | Niri event parser and state replacement |
| Click does nothing | Button signal and command arguments |
| CSS selector has no effect | GTK inspector and actual CSS node hierarchy |
| Theme reload stacks styles | CSS reset/reload strategy |
| Wrong monitor | GDK monitor versus Niri output mapping |

Useful command to learn:

```sh
ags inspect
```

The GTK inspector shows widget and CSS-node structure. It is more reliable than
guessing selectors.


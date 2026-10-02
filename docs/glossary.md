# Glossary

## Accessor

A reactive value used by current AGS/Gnim. Reading it inside a computed value
registers a dependency so the UI can update automatically.

## Astal

A collection of libraries for desktop-shell backends and Wayland integration.

## GJS

The GNOME JavaScript runtime. It exposes GTK and other GObject libraries to
JavaScript. It is not Node.js, so Node-only APIs are not automatically present.

## Gnim

The reactive and TSX layer used by current AGS applications.

## GObject

The object and signal system used by GTK and Astal libraries.

## Layer shell

A Wayland protocol used by panels, launchers, wallpapers, and overlays to tell
the compositor where and how a surface should be placed.

## View model

A UI-focused representation of external data. A `WorkspaceView` should contain
what the bar needs, rather than exposing the entire Niri protocol to every
widget.

## Semantic color

A color named by purpose, such as `main_text` or `module_bg`, instead of by its
literal appearance, such as `mint` or `gray`.


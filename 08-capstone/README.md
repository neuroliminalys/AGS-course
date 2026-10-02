# Module 08 — Capstone architecture

## Objective

Combine only the concepts you have completed into your own bar. This module does
not contain a finished solution.

## Rule

Do not copy every starter file into one directory and expect it to compile.
Refactor the ideas into one coherent application, resolving ownership and
lifecycle questions yourself.

## Phase 1 — Static shell

- One bar on the primary monitor
- Transparent outer window
- Rounded bar surface
- Stable left/center/right layout
- Static placeholders

## Phase 2 — Local interaction

- Reactive clock
- Calendar window
- Visibility toggle
- Escape/close behavior

## Phase 3 — Niri integration

- Initial workspace snapshot
- Event-driven updates
- Workspace action boundary
- Focused/occupied/empty styling

## Phase 4 — Theme integration

- Fallback colors
- Matugen generation
- Light theme
- Dark theme
- Accent-as-main-text experiment

## Phase 5 — Robustness

- Niri unavailable at startup
- Malformed/unknown event fields
- Matugen output missing
- AGS restarted repeatedly
- Niri restarted while AGS remains running
- Narrow monitor width
- Multiple monitors

## Architecture questions to answer in writing

1. Which component owns calendar visibility?
2. Which object owns the Niri subprocess?
3. How is that process cleaned up?
4. Which values are UI state versus external state?
5. How are GDK monitors matched to Niri outputs?
6. What happens when a workspace disappears during a click?
7. Which theme file is authoritative?
8. What is the fallback when generated CSS is missing?

## Definition of done

The capstone is complete when you can explain every state transition and service
boundary. Visual polish is not a substitute for that explanation.

Future courses can then add:

- Reusable circular metrics and monitoring services
- MPRIS media support instead of Spotify-only logic
- System tray
- Network and Bluetooth controls
- Audio controls
- Notification center


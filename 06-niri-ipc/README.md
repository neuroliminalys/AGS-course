# Module 06 — Niri IPC

## Objective

Translate Niri's JSON state and events into the workspace view model from Module
05, while keeping command execution outside UI components.

## Reading

- Niri IPC: <https://github.com/niri-wm/niri/blob/main/docs/wiki/IPC.md>
- AGS process utilities: <https://aylur.github.io/ags/guide/utilities.html>

## Exercise 1 — Protocol observation

Before writing TypeScript, inspect Niri manually:

1. Request the current workspace list as JSON.
2. Start the JSON event stream.
3. Focus, create, and remove workspaces.
4. Repeat with named workspaces.
5. If available, repeat with a second output.
6. Save anonymized example payloads in `observations/`.

Do not rely on human-readable output. Niri only promises programmatic stability
for its JSON representation.

## Exercise 2 — Pure parser

Implement `parseWorkspaceSnapshot` as a pure function. It should not start
processes or change global state.

Test these cases:

- Valid snapshot
- Missing optional name
- Unknown additional field
- Malformed JSON
- Empty workspace array

## Exercise 3 — Initial snapshot

Implement a function that asynchronously requests current state and feeds it to
the pure parser. Avoid blocking execution.

## Exercise 4 — Event stream

Start the continuous Niri JSON event stream. Decide how each relevant event
updates current state.

Questions:

1. Does each callback contain exactly one complete JSON object?
2. Can events arrive in an order that briefly references removed objects?
3. What happens when Niri restarts?
4. Will you incrementally merge events or refresh the snapshot for some event
   categories?

## Exercise 5 — Actions

Implement `focusWorkspace(id)` separately. Prefer argument arrays over shell
strings. Log failures without crashing AGS.

## Checkpoint

- Snapshot parser is testable without Niri.
- UI imports your service, not command syntax.
- The event stream updates focus promptly.
- Unknown JSON fields are ignored safely.
- A failed command does not terminate the bar.


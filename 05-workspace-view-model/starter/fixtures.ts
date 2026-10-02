import type { WorkspaceView } from "./types"

export const workspaceFixtures: WorkspaceView[] = [
  {
    id: 101,
    index: 1,
    output: "eDP-1",
    focused: false,
    active: false,
    occupied: true,
  },
  {
    id: 102,
    index: 2,
    name: "code",
    output: "eDP-1",
    focused: true,
    active: true,
    occupied: true,
  },
  // TODO: Add empty, named, and second-output cases.
]


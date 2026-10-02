import { createState } from "ags"
import type { WorkspaceView } from "../../05-workspace-view-model/starter/types"

const [workspaces, setWorkspaces] = createState<WorkspaceView[]>([])

export function getWorkspaces() {
  return workspaces
}

export async function loadInitialWorkspaces(): Promise<void> {
  // TODO: Use the current AGS async process utility.
  // TODO: Parse stdout with parseWorkspaceSnapshot.
  // TODO: Report errors without discarding previously valid state.
}

export function startWorkspaceEvents(): void {
  // TODO: Start `niri msg --json event-stream` without a shell.
  // TODO: Parse relevant events and update state immutably.
  // TODO: Decide how exit/restart should be handled.
}

export async function focusWorkspace(id: number): Promise<void> {
  void id
  // TODO: Send a Niri action using an argument array.
}


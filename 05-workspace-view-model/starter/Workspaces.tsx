import { For } from "ags"
import type { Accessor } from "ags"
import WorkspaceButton from "./WorkspaceButton"
import type { WorkspaceView } from "./types"

export interface WorkspacesProps {
  workspaces: Accessor<WorkspaceView[]>
  onActivate(id: number): void
}

export default function Workspaces(props: WorkspacesProps) {
  return (
    <box class="Workspaces">
      <For each={props.workspaces}>
        {(workspace) => (
          // TODO: Confirm how item values from For behave reactively.
          <WorkspaceButton
            workspace={workspace}
            onActivate={props.onActivate}
          />
        )}
      </For>
    </box>
  )
}


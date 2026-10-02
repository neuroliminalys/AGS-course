import { createComputed } from "ags"
import type { WorkspaceView } from "./types"

export interface WorkspaceButtonProps {
  workspace: WorkspaceView
  onActivate(id: number): void
}

export default function WorkspaceButton(props: WorkspaceButtonProps) {
  const className = createComputed(() => {
    const states = ["Workspace"]
    // TODO: Add focused, active, occupied, and empty state classes.
    return states.join(" ")
  })

  return (
    <button
      class={className}
      tooltipText={props.workspace.name ?? `Workspace ${props.workspace.index}`}
      onClicked={() => props.onActivate(props.workspace.id)}
    >
      <label label={props.workspace.index.toString()} />
    </button>
  )
}


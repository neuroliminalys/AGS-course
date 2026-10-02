import type { WorkspaceView } from "../../05-workspace-view-model/starter/types"
import type { NiriWorkspaceRecord } from "./protocol"

export function parseWorkspaceSnapshot(json: string): WorkspaceView[] {
  const parsed: unknown = JSON.parse(json)

  // TODO: Narrow `unknown` instead of using an unchecked type assertion.
  // TODO: Find the real top-level response shape from Niri documentation and
  // your observations.
  const records: NiriWorkspaceRecord[] = []

  return records.map((record) => ({
    id: record.id,
    index: record.idx,
    name: record.name ?? undefined,
    output: record.output ?? undefined,
    focused: record.is_focused,
    active: record.is_active,
    // TODO: Derive this from window/workspace state rather than hardcoding it.
    occupied: false,
  }))
}


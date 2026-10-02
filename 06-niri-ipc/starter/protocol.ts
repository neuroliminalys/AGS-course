// These types should model only the subset of Niri JSON that your parser uses.
// TODO: Replace assumptions with observations from your installed Niri version.

export interface NiriWorkspaceRecord {
  id: number
  idx: number
  name?: string | null
  output?: string | null
  is_focused: boolean
  is_active: boolean
  // TODO: Determine how occupancy can be derived from actual Niri data.
}

export type NiriEvent = unknown


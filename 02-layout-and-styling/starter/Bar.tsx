function Module(props: { label: string; class?: string }) {
  return (
    <button class={`Module ${props.class ?? ""}`}>
      <label label={props.label} />
    </button>
  )
}

export default function BarContent() {
  const left = (
    <box class="BarSection LeftSection" spacing={8}>
      <Module label="Home" />
      {/* TODO: Add static monitor placeholders. */}
    </box>
  )

  const center = (
    <box class="BarSection CenterSection" spacing={8}>
      {/* TODO: Add workspace, clock, and media placeholders. */}
    </box>
  )

  const right = (
    <box class="BarSection RightSection" spacing={8}>
      {/* TODO: Add tray and control placeholders. */}
    </box>
  )

  // TODO: Replace this temporary box with a layout that keeps `center`
  // physically centered. Consult Gtk.CenterBox rather than guessing.
  return <box>{left}{center}{right}</box>
}

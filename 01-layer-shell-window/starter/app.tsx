import app from "ags/gtk4/app"
import { Astal } from "ags/gtk4"
import css from "./style.css"

function Bar() {
  // TODO: Read Astal.WindowAnchor in the intrinsic-elements documentation.
  // TODO: Combine TOP, LEFT, and RIGHT anchors.
  const anchor = Astal.WindowAnchor.TOP

  return (
    <window
      visible
      namespace="ags-learning-bar"
      anchor={anchor}
      // TODO: Choose an exclusivity value and explain it in your notes.
      class="BarWindow"
    >
      <box class="BarSurface">
        <label label="Module 01" />
      </box>
    </window>
  )
}

app.start({
  css,
  main() {
    // TODO: Instantiate Bar and confirm that the object remains alive.
    Bar()
  },
})


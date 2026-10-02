import { Astal, Gtk } from "ags/gtk4"

export interface CalendarWindowProps {
  // TODO: Decide whether visibility is owned here or supplied by the parent.
}

export default function CalendarWindow(_props: CalendarWindowProps) {
  return (
    <window
      name="calendar"
      namespace="ags-learning-calendar"
      visible={false}
      // TODO: Select anchors, layer, and key mode after reading Astal.Window.
      class="CalendarWindow"
    >
      <box class="CalendarSurface">
        <Gtk.Calendar
          showDayNames
          showHeading
          showWeekNumbers={false}
          // TODO: Connect one calendar signal and inspect its arguments.
        />
      </box>
    </window>
  )
}


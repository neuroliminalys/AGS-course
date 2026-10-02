export interface ClockButtonProps {
  onToggleCalendar(): void
  dateLabel: string
  timeLabel: string
}

export default function ClockButton(props: ClockButtonProps) {
  return (
    <button class="Clock" onClicked={props.onToggleCalendar}>
      <box orientation={1}>
        <label label={props.dateLabel} />
        <label label={props.timeLabel} />
      </box>
    </button>
  )
}


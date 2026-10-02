import { createComputed } from "ags"
import { createPoll } from "ags/time"

function ordinal(day: number): string {
  // TODO: Handle 11, 12, and 13 before looking only at the last digit.
  return day.toString()
}

export default function Clock() {
  const now = createPoll(new Date(), 60_000, () => new Date())

  const dateLabel = createComputed(() => {
    const date = now()
    // TODO: Combine Intl.DateTimeFormat output with ordinal(date.getDate()).
    return date.toDateString()
  })

  const timeLabel = createComputed(() => {
    // TODO: Format now() as your chosen 12- or 24-hour time.
    return "00:00"
  })

  return (
    <button class="Clock">
      <box orientation={1}>
        <label label={dateLabel} />
        <label label={timeLabel} />
      </box>
    </button>
  )
}


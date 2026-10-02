import { createComputed, createState } from "ags"

export default function ReactiveButton() {
  const [active, setActive] = createState(false)

  const label = createComputed(() => {
    // TODO: Return a label based on active().
    return "TODO"
  })

  const className = createComputed(() => {
    // TODO: Return both the base class and an optional active modifier.
    return "Module"
  })

  return (
    <button
      class={className}
      onClicked={() => {
        // TODO: Toggle the current boolean without storing a second copy.
      }}
    >
      <label label={label} />
    </button>
  )
}


<script>
  import Axis from './Axis.svelte'
  import Bubbles from './Bubbles.svelte'
  import Name from './Name.svelte'
  import Line from './Line.svelte'
  import YearDisplay from './YearDisplay.svelte'
  import SelectYear from './SelectYear.svelte'
  import { WIDTH, HEIGHT } from './utils'

  let year = 2020
  let hovered = undefined
</script>

<svg viewBox={`0 0 ${WIDTH} ${HEIGHT}`}>
  <Bubbles year={year} onMouseOver={d => hovered = d} />
  <YearDisplay year={year} />
  <Line hovered={hovered} />
  <Axis />
  <Name hovered={hovered} />
</svg>
<SelectYear onChange={d => year = d} />

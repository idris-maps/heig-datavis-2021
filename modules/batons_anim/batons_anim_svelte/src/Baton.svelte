<script>
import { tweened } from 'svelte/motion'
import { cubicOut } from 'svelte/easing'
import {
  scaleLinear,
  max,
} from 'd3'
import {
  DATA,
  HEIGHT,
  MARGIN,
  MARGIN_BOTTOM,
  BAR_WIDTH,
} from './utils'

export let d
export let i
export let key

const y = tweened(HEIGHT - MARGIN_BOTTOM, {
  duration: 1000,
  easing: cubicOut,
})

const value = tweened(0, {
  duration: 1000,
})


$: {
  const yScale = scaleLinear()
    .domain([0, max(DATA, d => d[key])])
    .range([HEIGHT - MARGIN_BOTTOM, 0])
  
  $y = yScale(d[key])
  $value = d[key]
}
</script>

<rect
  x={i * BAR_WIDTH}
  width={BAR_WIDTH - MARGIN}
  y={$y}
  height={HEIGHT - MARGIN_BOTTOM - $y}
  fill="steelblue"
  />
<text
  x={i * BAR_WIDTH + BAR_WIDTH / 2}
  y={HEIGHT - MARGIN_BOTTOM / 2}
  text-anchor="middle"
  >{d.nom}</text>
<text
  x={i * BAR_WIDTH + BAR_WIDTH / 2}
  y={$y + MARGIN * 4}
  text-anchor="middle"
  fill="white"
  >{Math.round($value * 10) / 10}</text>
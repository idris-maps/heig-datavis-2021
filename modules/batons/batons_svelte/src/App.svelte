<script>
import { onMount } from 'svelte'
import {
  axisLeft,
  select,
  scaleLinear,
  max,
} from 'd3'

const DATA = [
  { nom: 'Lausanne', population: 138905 },
  { nom: 'Yverdon-les-Bains', population: 30143 },
  { nom: 'Montreux', population: 26574 },
  { nom: 'Renens', population: 21036 },
  { nom: 'Nyon', population: 20533 },
  { nom: 'Vevey', population: 19827 },
]

const WIDTH = 1000
const HEIGHT = 500
const MARGIN = 5
const MARGIN_LEFT = 50
const MARGIN_BOTTOM = 50
const BAR_WIDTH = (WIDTH - MARGIN_LEFT) / DATA.length

const yScale = scaleLinear()
  .domain([0, max(DATA, d => d.population)])
  .range([HEIGHT - MARGIN_BOTTOM, 0])

let yAxis
onMount(() => {
  select(yAxis)
    .call(
      axisLeft().scale(yScale)
        .tickFormat(d => `${d / 1000}k`)
        .ticks(5)
    )
})

</script>

<svg viewBox={`0 0 ${WIDTH} ${HEIGHT}`}>
  <g transform={`translate(${MARGIN_LEFT}, 0)`}>
    {#each DATA as d, i}
      <rect
        x={i * BAR_WIDTH}
        width={BAR_WIDTH - MARGIN}
        y={yScale(d.population)}
        height={HEIGHT - MARGIN_BOTTOM - yScale(d.population)}
        fill="steelblue"
      />
      <text
        x={i * BAR_WIDTH + BAR_WIDTH / 2}
        y={HEIGHT - MARGIN_BOTTOM / 2}
        text-anchor="middle"
      >{d.nom}</text>
    {/each}
  </g>
  <g bind:this={yAxis} transform={`translate(${MARGIN_LEFT - 3})`} />
</svg>

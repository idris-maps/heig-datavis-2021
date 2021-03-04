<script>
  import { pointer } from 'd3'
  import data from './data'
  import {
    MARGIN_LEFT,
    MARGIN_TOP,
    getColorByRegion,
    xScale,
    yScale,
    rScale,
    getYearIndex,
  } from './utils'

  export let year
  export let onMouseOver

  $: yearIndex = getYearIndex(year)

  const onMouse = name => e => {
    onMouseOver({ name, position: pointer(e) })
  }
 
</script>

<g transform={`translate(${MARGIN_LEFT}, ${MARGIN_TOP})`}>
  {#each data as d}
    <circle
      fill={getColorByRegion(d)}
      fill-opacity={0.4}
      stroke={getColorByRegion(d)}
      cx={xScale(d.gdp[yearIndex])}
      cy={yScale(d.lex[yearIndex])}
      r={rScale(d.pop[yearIndex])}
      on:mouseover={onMouse(d.name)}
      on:mousemove={onMouse(d.name)}
      on:mouseout={() => onMouseOver(undefined)}
    />
  {/each}
</g>

<style>
  circle:hover {
    stroke: black;
  }
</style>
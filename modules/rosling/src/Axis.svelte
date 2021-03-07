<script>
  import { select, axisLeft, axisBottom } from 'd3'
  import {
    HEIGHT,
    MARGIN_LEFT,
    MARGIN_TOP,
    MARGIN_BOTTOM,
    WIDTH,
    xScale,
    yScale,
    rAxis,
  } from './utils'

  const AXIS_LABEL_SIZE = 10

  const yAxis = node => select(node).call(axisLeft().scale(yScale))
  const xAxis = node => select(node).call(axisBottom().scale(xScale).tickFormat(d => d / 1000))
</script>

<g class="axis">
  <g
    transform={`translate(${MARGIN_LEFT}, ${MARGIN_TOP})`}
    use:yAxis
  />
  <g
    transform={`translate(${MARGIN_LEFT}, ${HEIGHT - MARGIN_BOTTOM})`}
    use:xAxis
  />
  <text
    x={MARGIN_LEFT}
    y={MARGIN_TOP}
    font-size={AXIS_LABEL_SIZE}
    transform={`rotate(90, ${MARGIN_LEFT}, ${MARGIN_TOP}) translate(0, -5)`}
  >
    Life expectancy (years)
  </text>
  <text
    x={WIDTH}
    y={HEIGHT - MARGIN_BOTTOM - 3}
    text-anchor="end"
    font-size={AXIS_LABEL_SIZE}
  >
    GDP per capita (in $1000's)
  </text>
  <g transform={`translate(${WIDTH * 0.9}, ${HEIGHT * 0.45})`}>
    {#each rAxis as d}
      <circle
        cy={d.radius}
        r={d.radius}
        fill="none"
        stroke="black"
      />
      <text
        x="55"
        y={d.radius * 2}
        font-size="8"
      >
        {d.label}
      </text>
    {/each}
    <text
      text-anchor="middle"
      y="-10"
    >
      Population
    </text>
  </g>
</g>
<style>
.axis {
  opacity: 0.5;
  font-size: 8;
}
</style>
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
  <text
    x={MARGIN_LEFT}
    y={MARGIN_TOP}
    font-size={AXIS_LABEL_SIZE}
    transform={`rotate(90, ${MARGIN_LEFT}, ${MARGIN_TOP}) translate(0, -10)`}
  >
    Life expectancy (years)
  </text>
  <g
    transform={`translate(${MARGIN_LEFT}, ${HEIGHT - MARGIN_BOTTOM})`}
    use:xAxis
  />
  <text
    x={WIDTH}
    y={HEIGHT - MARGIN_BOTTOM - 5}
    text-anchor="end"
    font-size={AXIS_LABEL_SIZE}
  >
    GDP per capita (in $1000's)
  </text>
  <g transform={`translate(${WIDTH * 0.9}, ${HEIGHT * 0.45})`}>
    {#each rAxis as d}
      <line
        x2="52"
        y1={d.radius * 2}
        y2={d.radius * 2}
        stroke="black"
        stroke-dasharray="1 2"
      />
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
      font-size={AXIS_LABEL_SIZE}
      text-anchor="middle"
      y="-10"
    >
      Population
    </text>
  </g>
</g>
<style>
.axis {
  opacity: 0.8;
  font-size: 8;
}
</style>
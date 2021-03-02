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
  >Life expectancy (years)</text>
  <text
    x={WIDTH}
    y={HEIGHT - MARGIN_BOTTOM - 3}
    text-anchor={'end'}
    font-size={AXIS_LABEL_SIZE}
  >GDP per capita (in $1000's)</text>
</g>

<style>
.axis {
  opacity: 0.5;
  font-size: 8;
}
</style>
import { select, scaleLinear, max, axisLeft } from 'd3'
import {
  DATA,
  WIDTH,
  HEIGHT,
  MARGIN,
  MARGIN_LEFT,
  MARGIN_BOTTOM,
  BAR_WIDTH,
} from './utils'

const svg = select('body')
  .append('svg')
  .attr('viewBox', `0 0 ${WIDTH} ${HEIGHT}`)

const g = svg.append('g')
  .attr('transform', `translate(${MARGIN_LEFT}, 0)`)

const rect = g.selectAll('rect')
  .data(DATA)
  .enter()
  .append('rect')
  .attr('x', (d, i) =>  i * BAR_WIDTH)
  .attr('width', BAR_WIDTH - MARGIN)
  .attr('y', HEIGHT - MARGIN_BOTTOM)
  .attr('height', 0)
  .attr('fill', 'steelblue')

g.selectAll('text')
  .data(DATA)
  .enter()
  .append('text')
  .text(d => d.nom)
  .attr('x', (d, i) =>  i * BAR_WIDTH + BAR_WIDTH / 2)
  .attr('y', HEIGHT - MARGIN_BOTTOM / 2)
  .attr('text-anchor', 'middle')

const axis = svg.append('g')
  .attr('transform', `translate(${MARGIN_LEFT - 3})`)

const onChange = key => {
  const yScale = scaleLinear()
    .domain([0, max(DATA, d => d[key])])
    .range([HEIGHT - MARGIN_BOTTOM, 0])

  const axisY = axisLeft().scale(yScale)
    .tickFormat(d => key === 'superficie' ? d : `${d / 1000}k`)
    .ticks(5)

  rect
    .transition()
    .duration(1000)
    .attr('y', d => yScale(d[key]))
    .attr('height', d => HEIGHT - MARGIN_BOTTOM - yScale(d[key]))

  axis
    .transition()
    .duration(1000)
    .call(axisY)
}

select('select').on('change', e => onChange(e.target.value))

window.onload = () => onChange('population')
import { select, pointer  } from 'd3'
import { DATA, WIDTH, HEIGHT } from './utils'

const container = select('#graph-1')

const svg = container.append('svg').attr('viewBox', `0 0 ${WIDTH} ${HEIGHT}`)

const CIRCLE_MARGIN = WIDTH / DATA.length

const circles = svg.selectAll('circle')
  .data(DATA)
  .enter()
  .append('circle')
  .attr('cx', (d, i) => CIRCLE_MARGIN * i + CIRCLE_MARGIN / 2)
  .attr('cy', HEIGHT / 2)
  .attr('r', HEIGHT / 3)
  .attr('fill', 'indianred')

const label = svg.append('text')
  .attr('text-anchor', 'middle')

const quandLaSourisPasseDessus = (e, d) => {
  const [x, y] = pointer(e)
  label
    .attr('x', x)
    .attr('y', y - 20)
    .text(d.nom)
}

circles.on('mouseover', quandLaSourisPasseDessus)
circles.on('mousemove', quandLaSourisPasseDessus)
circles.on('mouseout', () => label.text(''))
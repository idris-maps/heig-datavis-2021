import { select } from 'd3'
import { DATA, WIDTH, HEIGHT } from './utils'

const container = select('#graph-2')

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

const LABEL_WIDTH = 200
const label = container.append('div')
  .style('position', 'fixed')
  .style('width', `${LABEL_WIDTH}px`)
  .style('text-align', 'center')

const quandLaSourisPasseDessus = (e, d) => {
  const { clientX, clientY } = e
  label
    .style('left', `${clientX - LABEL_WIDTH / 2}px`)
    .style('top', `${clientY - 20}px`)
    .text(d.nom)
}

circles.on('mouseover', quandLaSourisPasseDessus)
circles.on('mousemove', quandLaSourisPasseDessus)
circles.on('mouseout', () => label.text(''))
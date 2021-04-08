import {
  axisLeft,
  select,
  scaleLinear,
  max,
} from 'd3'
import textures from 'textures'

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
const MARGIN = 25
const MARGIN_LEFT = 50
const MARGIN_BOTTOM = 50
const BAR_WIDTH = (WIDTH - MARGIN_LEFT) / DATA.length

const svg = select('body')
  .append('svg')
  .attr('viewBox', `0 0 ${WIDTH} ${HEIGHT}`)

const defs = svg.append('defs')

const noise = defs.append('filter').attr('id', 'noise')
noise.append('feTurbulence').attr('baseFrequency', 0.9)

const shadow = defs.append('filter').attr('id', 'shadow')
shadow.append('feOffset').attr('in', 'SourceAlpha').attr('dx', 5).attr('dy', 5)
shadow.append('feGaussianBlur').attr('stdDeviation', 2).attr('result', 'drop')
shadow.append('feFlood').attr('flood-color', 'lightgrey').attr('color')
shadow.append('feComposite').attr('in', 'color').attr('in2', 'drop').attr('operator', 'in').attr('result', 'shadow')
const shadowMerge = shadow.append('feMerge')
shadowMerge.append('feMergeNode').attr('in', 'shadow')
shadowMerge.append('feMergeNode').attr('in', 'SourceGraphic')

const texture = textures.circles()
  .size(10)
  .radius(1)
  .fill('#8bc1ee')
  .complement()
  .background('steelblue')

svg.call(texture)

svg.append('rect')
  .attr('width', WIDTH)
  .attr('height', HEIGHT)
  .attr('fill', 'white')
  .attr('filter', 'url(#noise)')
  .attr('opacity', 0.2)

const yScale = scaleLinear()
  .domain([0, max(DATA, d => d.population)])
  .range([HEIGHT - MARGIN_BOTTOM, 0])

const g = svg.append('g')
  .attr('transform', `translate(${MARGIN_LEFT}, 0)`)

g.selectAll('rect')
  .data(DATA)
  .enter()
  .append('rect')
  .attr('x', (d, i) =>  i * BAR_WIDTH)
  .attr('width', BAR_WIDTH - MARGIN)
  .attr('y', d => yScale(d.population))
  .attr('height', d => HEIGHT - MARGIN_BOTTOM - yScale(d.population))
  .attr('fill', texture.url())
  .attr('stroke', 'steelblue')
  .attr('stroke-width', 3)
  .attr('filter', 'url(#shadow)')

g.selectAll('text')
  .data(DATA)
  .enter()
  .append('text')
  .text(d => d.nom)
  .attr('x', (d, i) =>  i * BAR_WIDTH + BAR_WIDTH / 2 - MARGIN / 2)
  .attr('y', HEIGHT - MARGIN_BOTTOM / 2)
  .attr('text-anchor', 'middle')
  .attr('filter', 'url(#shadow)')

const axisY = axisLeft().scale(yScale)
  .tickFormat(d => `${d / 1000}k`)
  .ticks(5)

svg.append('g')
  .attr('transform', `translate(${MARGIN_LEFT - 5})`)
  .attr('filter', 'url(#shadow)')
  .call(axisY)

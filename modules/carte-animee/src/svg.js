import {
  geoOrthographic,
  geoPath,
  select,
  timer,
  scaleQuantile,
} from 'd3'
import features from './data.json'

const WIDTH = 1000
const HEIGHT = 800

const svg = select('#map-svg').append('svg')
  .attr('viewBox', `0 0 ${WIDTH} ${HEIGHT}`)

svg.append('circle')
  .attr('cx', WIDTH / 2)
  .attr('cy', HEIGHT / 2)
  .attr('r', HEIGHT * 0.5)
  .attr('fill', '#188dbf')

const color = scaleQuantile()
  .domain(features.map(d => d.properties.valeur))
  .range([
    '#edf8fb',
    '#ccece6',
    '#99d8c9',
    '#66c2a4',
    '#2ca25f',
    '#006d2c',
  ])

const paths = svg.selectAll('path')
  .data(features)
  .enter()
  .append('path')
  .attr('stroke', 'white')
  .attr('fill', d => color(d.properties.valeur))

let rotate = [0, 0, 0]

const tick = () => {
  rotate = [rotate[0] + 0.5, -10, 0]
  const projection = geoOrthographic()
    .fitExtent([[0, 0], [WIDTH, HEIGHT]], { type: 'FeatureCollection', features })
    .rotate(rotate)
  const pathCreator = geoPath().projection(projection)
  paths.attr('d', pathCreator)
}

timer(tick)
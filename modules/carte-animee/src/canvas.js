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

const canvas = select('#map-canvas').append('canvas')
  .attr('width', WIDTH)
  .attr('height', HEIGHT)

const context = canvas.node().getContext('2d')

const drawBackground = () => {
  context.fillStyle = '#188dbf'
  context.arc(WIDTH / 2, HEIGHT / 2, HEIGHT * 0.5, 0, Math.PI * 2)
  context.fill()
}

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

const drawFeature = pathCreator => d => {
  context.fillStyle = color(d.properties.valeur)
  context.lineWidth = 1
  context.strokeStyle = 'white'

  context.beginPath()
  pathCreator(d)
  context.fill()
  context.stroke()
}

let rotate = [0, 0, 0]

const tick = () => {
  rotate = [rotate[0] + 0.5, -10, 0]
  const projection = geoOrthographic()
    .fitExtent([[0, 0], [WIDTH, HEIGHT]], { type: 'FeatureCollection', features })
    .rotate(rotate)

  const pathCreator = geoPath()
    .projection(projection)
    .context(context)

  context.clearRect(0, 0, WIDTH, HEIGHT)
  drawBackground()
  features.map(drawFeature(pathCreator))
}

timer(tick)

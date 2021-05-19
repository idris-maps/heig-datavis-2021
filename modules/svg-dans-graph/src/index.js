import {
  axisLeft,
  select,
  scaleLinear,
  max,
} from 'd3'

const DATA = [
  { nom: 'Lausanne', population: 138905 },
  { nom: 'Yverdon-les-Bains', population: 30143 },
  { nom: 'Montreux', population: 26574 },
  { nom: 'Renens', population: 21036 },
  { nom: 'Nyon', population: 20533 },
  { nom: 'Vevey', population: 19827 },
]

const img = {
  viewBox: '0 0 209.66 50.192',
  d: 'M0 45.578v-4.613l1.751-.038 1.752-.037.036-3.982.036-3.982h5.348l.037 3.246.037 3.246 1.613.037 1.614.038V22.888H25.41v15.258h1.648v-1.472h3.696l.04-.97.04-.971h7.417l.04.97.041.97H41.067v1.205h3.846V27.305H50.956V24.226H61.118l.035 8.265.035 8.265h1.058l-.02-2.041-.02-2.041H67.163V34.813l.927-.04.927-.04.04-.903.041-.904h3.559V14.054h7.005v-1.472h2.335V14.589h3.433V17.4h4.12v-1.74h2.06V16.731h3.16v-5.756h12.224v4.564l.79-.04.79-.04.035-4.986.036-4.985h1.096v-1.74h1.236V0h4.938l.037 2.175.038 2.175.721.04.721.04V9c0 4.428.008 4.577.283 4.862.263.273.285.471.31 2.886l.025 2.593.515.041.515.042v7.211h2.61V8.165h1.36l.041-.904.041-.903 1.477-.038 1.476-.038V7.763h4.395v9.235h.824v-2.677h10.988v2.544H143.527l.035 11.544.035 11.544.72.04.722.04v3.2h1.236V37.36l.446-.042.447-.042.037-2.309.038-2.309h.955v-1.74h1.923V32.391h1.51v8.298h2.06v-7.616l.86-.04.858-.04.04-.97.04-.97h1.362v1.338h4.807V30.25H163.169v2.14H165.367v6.693h4.257v-4.149h8.515v2.677h1.786v-1.874h5.494V34.666h3.434v7.763h1.51v-1.606H191.874v-1.874h8.378V41.894H202.45v2.275h2.335v-.803h4.798l.039 3.413.038 3.413H0z',
}

const WIDTH = 1000
const HEIGHT = 500
const MARGIN = 5
const MARGIN_LEFT = 50
const MARGIN_BOTTOM = 50
const MARGIN_TOP = 50
const BAR_HEIGHT = HEIGHT - MARGIN_TOP - MARGIN_BOTTOM
const BAR_WIDTH = (WIDTH - MARGIN_LEFT) / DATA.length

const svg = select('body')
  .append('svg')
  .attr('viewBox', `0 0 ${WIDTH} ${HEIGHT}`)

const yScale = scaleLinear()
  .domain([0, max(DATA, d => d.population)])
  .range([BAR_HEIGHT, 0])


const g = svg.append('g')
  .attr('transform', `translate(${MARGIN_LEFT}, ${MARGIN_TOP})`)

g.selectAll('rect')
  .data(DATA)
  .enter()
  .append('rect')
  .attr('x', (d, i) =>  i * BAR_WIDTH)
  .attr('width', BAR_WIDTH - MARGIN)
  .attr('y', d => yScale(d.population))
  .attr('height', d => BAR_HEIGHT - yScale(d.population))
  .attr('fill', 'steelblue')

g.selectAll('text')
  .data(DATA)
  .enter()
  .append('text')
  .text(d => d.nom)
  .attr('x', (d, i) =>  i * BAR_WIDTH + BAR_WIDTH / 2)
  .attr('y', BAR_HEIGHT + MARGIN_BOTTOM / 2)
  .attr('text-anchor', 'middle')

const axisY = axisLeft().scale(yScale)
  .tickFormat(d => `${d / 1000}k`)
  .ticks(5)

svg.append('g')
  .attr('transform', `translate(${MARGIN_LEFT - 3}, ${MARGIN_TOP})`)
  .call(axisY)

const imagesG = g.append('g')
  .attr('transform', `translate(${-BAR_WIDTH / 2}, -15)`)

imagesG.selectAll('svg')
  .data(DATA)
  .enter()
  .append('svg')
  .attr('viewBox', img.viewBox)
  .attr('width', BAR_WIDTH - MARGIN)
  .attr('x', (d, i) =>  i * BAR_WIDTH + BAR_WIDTH / 2)
  .attr('y', d => yScale(d.population) - HEIGHT / 2)
  .append('path')
    .attr('d', img.d)
    .attr('fill', 'steelblue')
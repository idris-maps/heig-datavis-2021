import { scaleLinear, scaleLog, scaleRadial, line, curveBasis } from 'd3'
import data from './data'

export const WIDTH = 1000
export const HEIGHT = 450
export const MARGIN_LEFT = 30
export const MARGIN_TOP = 20
export const MARGIN_BOTTOM = 30
export const GRAPH_WIDTH = WIDTH - MARGIN_LEFT
export const GRAPH_HEIGHT = HEIGHT - MARGIN_BOTTOM - MARGIN_TOP

export const xScale = scaleLog().domain([500, 140000]).range([0, GRAPH_WIDTH])
export const yScale = scaleLinear().domain([20, 85]).range([GRAPH_HEIGHT, 0])
export const rScale = scaleRadial().domain([25000, 1000000000]).range([3, 50])

export const getColorByRegion = ({ region }) => {
  switch(region) {
    case 'south_asia':return '#66c2a5'
    case 'europe_central_asia': return '#fc8d62'
    case 'middle_east_north_africa': return '#8da0cb'
    case 'sub_saharan_africa': return '#e78ac3'
    case 'america': return '#a6d854'
    default: return '#ffd92f'
  }
}

export const getYearIndex = year => year - 1800

const getLineDataByName = d => {
  const name = d?.name
  if (!name) { return undefined }

  const country = data.find(d => d.name === name)
  if (!name) { return undefined }
  
  return country.gdp.map((d, i) => [d, country.lex[i]])
}

export const getLinePathByName = d => {
  const lineData = getLineDataByName(d)
  if (!lineData) { return '' }

  const lineCreator = line()
    .x(d => xScale(d[0]))
    .y(d => yScale(d[1]))
    .curve(curveBasis)

  return lineCreator(lineData)
}

export const getLineColorByName = d => {
  const name = d?.name
  if (!name) { return 'none' }

  const country = data.find(d => d.name === name)
  if (!country) { return 'none' }

  return getColorByRegion(country)
}

const M = 1000000
export const rAxis = [M, 20 * M, 100 * M, 1000 * M]
  .map(d => ({ value: d, label: d / M + ' M', radius: rScale(d) }))
import { max, scaleLinear } from 'd3'
import _data from './data.json'

export const WIDTH = 1000
export const HEIGHT = 500
export const BAR_HEIGHT = 40
export const BAR_MARGIN = 10
export const TICK = 500
export const AXIS_HEIGHT = 30
export const SIDE_MARGIN = 20

const getColorByRegion = region => {
  switch(region) {
    case 'south_asia':return '#66c2a5'
    case 'europe_central_asia': return '#fc8d62'
    case 'middle_east_north_africa': return '#8da0cb'
    case 'sub_saharan_africa': return '#e78ac3'
    case 'america': return '#a6d854'
    default: return '#ffd92f'
  }
}

export const data = _data.map(d => ({
  name: d.name,
  color: getColorByRegion(d.region),
  data: d.data.map(([year, value, position]) => ({ year, value, position })),
}))

export const findDataByYear = (year, { data }) => {
  const found = data.find(d => d.year === year)
  return found || { year, value: 0, position: 11 }
}

const findValueByYear = year => d => findDataByYear(year, d).value

export const getXScale = year =>
  scaleLinear()
    .domain([0, max(data.map(findValueByYear(year)))])
    .range([0, WIDTH])

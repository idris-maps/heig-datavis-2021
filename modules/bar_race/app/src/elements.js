import { select } from 'd3'
import {
  data,
  AXIS_HEIGHT,
  BAR_HEIGHT,
  BAR_MARGIN,
  WIDTH,
  HEIGHT,
  SIDE_MARGIN,
} from './utils'

const svg = select('#graph')
  .append('svg')
  .attr('viewBox', `0 0 ${WIDTH + 2 * SIDE_MARGIN} ${HEIGHT}`)

const graph = svg.append('g').attr('transform', `translate(${SIDE_MARGIN}, 0)`)

const bars = graph.selectAll('rect')
  .data(data)
  .enter()
  .append('rect')
    .attr('x', 0)
    .attr('y', HEIGHT)
    .attr('width', 0)
    .attr('height', BAR_HEIGHT)
    .attr('fill', d => d.color)
    .attr('fill-opacity', 0.5)
    .attr('stroke', d => d.color)

const labels = graph.selectAll('text')
  .data(data)
  .enter()
  .append('text')
    .attr('x', 0)
    .attr('y', HEIGHT + BAR_HEIGHT * 0.65)
    .attr('text-anchor', 'end')
    .text(d => d.name)

const yearLabel = graph.append('text')
  .attr('x', WIDTH - BAR_MARGIN)
  .attr('y', HEIGHT - BAR_MARGIN)
  .attr('text-anchor', 'end')
  .attr('font-size', BAR_HEIGHT)

const axis = select('#axis')
  .append('svg')
  .attr('viewBox', `0 0 ${WIDTH + 2 * SIDE_MARGIN} ${AXIS_HEIGHT}`)
    .append('g')
    .attr('transform', `translate(${SIDE_MARGIN}, ${AXIS_HEIGHT * 0.9})`)

const playButton = select('#play-button')

const sliderContainer = select('#slider-container')

export const addSlider = () => {
  const slider = sliderContainer.append('input')
    .attr('type', 'range')
    .attr('min', 1871)
    .attr('max', 2020)
    .attr('step', 1)
  
  return slider
}

export const removeSlider = () => {
  sliderContainer.select('input').remove()
}

export const togglePlayButton = () => {
  const on = playButton.select('#playing')
  const off = playButton.select('#not-playing')
  on.attr('opacity', Number(on.attr('opacity')) === 1 ? 0 : 1)
  off.attr('opacity', Number(off.attr('opacity')) === 1 ? 0 : 1)
}


export default {
  bars,
  labels,
  yearLabel,
  axis,
  playButton,
}
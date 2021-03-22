import { axisTop, timer } from 'd3'
import el, { addSlider, removeSlider, togglePlayButton } from './elements'
import {
  BAR_HEIGHT,
  BAR_MARGIN,
  TICK,
  getXScale,
  findDataByYear,
} from './utils'

let playing = true
let year = 1871
let seconds = 0

const onYearChange = year => {
  const xScale = getXScale(year)

  el.bars.transition()
    .duration(TICK * 0.9)
    .attr('y', d => findDataByYear(year, d).position * (BAR_HEIGHT + BAR_MARGIN))
    .attr('width', d => xScale(findDataByYear(year, d).value))
  
  el.labels.transition()
    .duration(TICK * 0.9)
    .attr('x', d => xScale(findDataByYear(year, d).value) - BAR_MARGIN)
    .attr('y', d => findDataByYear(year, d).position * (BAR_HEIGHT + BAR_MARGIN) + BAR_HEIGHT * 0.65)
    .text(d => `${d.name} (${findDataByYear(year, d).value})`)

  el.yearLabel.text(year)

  el.axis.transition()
    .duration(TICK * 0.9)
    .call(axisTop().scale(xScale))
}

const onTick = t => {
  const s = Math.floor(t / TICK)
  if (seconds !== s) {
    seconds = s
    year = year === 2020 ? 1871 : year + 1
    onYearChange(year)
  }
}

const ticker = timer(onTick)

const onPlayButtonClick = () => {
  if (playing) {
    ticker.stop()
    playing = false
    togglePlayButton()
    const slider = addSlider()
    slider.attr('value', year)
    slider.on('input', e => {
      const y = Number(e.target.value)
      onYearChange(y)
      year = y
    })
  } else {
    ticker.restart(onTick)
    playing = true
    togglePlayButton()
    removeSlider()
  }
}

el.playButton.on('click', onPlayButtonClick)

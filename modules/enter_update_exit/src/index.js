import {
  select,
} from 'd3'

const WIDTH = 300
const HEIGHT = 100
const TIME = 1000
const letters = 'abcdefghijklmnopqrstuvwxy';

const uniq = d => [...new Set(d)]

const getRandomLetters = () =>
  uniq(
    Array.from(Array(15)).map(() => Math.floor(Math.random() * letters.length))
  )
    .sort((a, b) => a > b ? 1 : -1)
    .map(id => ({ id, value: letters[id] }))

const div = select('#graph')

const svg = div.append('svg').attr('viewBox', `0 0 ${WIDTH} ${HEIGHT}`)

const newData = () => {
  const texts = svg.selectAll('text')
    .data(getRandomLetters(), d => d.id)

  texts.exit()
    .transition()
      .attr('y', 80)
      .attr('fill', 'red')
    .transition()
      .delay(TIME)
      .attr('y', HEIGHT * 2)
      .remove()

  const entering = texts.enter()
    .append('text')
      .attr('x', (d, i) => i * 20)
      .attr('y', 40)
      .attr('fill', 'green')
      .text(d => d.value)

  texts.merge(entering)
    .transition()
      .delay(TIME)
      .attr('x', (d, i) => i * 20)
      .attr('y', 60)
      .attr('fill', 'black')
}

select(window).on('load', newData)

const btn = select('#btn')

btn.on('click', newData)
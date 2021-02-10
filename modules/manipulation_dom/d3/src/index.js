import { select } from 'd3'

let count = 0
const counterButton = select('#counter')
counterButton.on('click', () => {
  count = count + 1
  counterButton.text(count)
})

const nameInput = select('#name-input')
const nameDisplay = select('#name-display')
nameInput.on('keyup', e => {
  nameDisplay.text(e.target.value)
})

const data = [1, 2, 3, 4, 5]
const list = select('#list')
list.selectAll('li')
  .data(data)
  .enter()
  .append('li')
  .text(d => d)

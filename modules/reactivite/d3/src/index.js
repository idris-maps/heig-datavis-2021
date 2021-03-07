import { select } from 'd3'

const toNum = d => {
  const n = Number(d)
  return Number.isNaN(d) ? 0 : n
}

const body = select('body')

let a = 1
let b = 2
const inputA = body.append('input').attr('type', 'number').attr('value', a)
const inputB = body.append('input').attr('type', 'number').attr('value', b)

const addition = body.append('p')
const soustraction = body.append('p')
const multiplication = body.append('p')
const division = body.append('p')

const update = () => {
  addition.text(`${a} + ${b} = ${a + b}`)
  soustraction.text(`${a} - ${b} = ${a - b}`)
  multiplication.text(`${a} * ${b} = ${a * b}`)
  division.text(`${a} / ${b} = ${a / b}`)
}

inputA.on('input', e => {
  a = toNum(e.target.value)
  update()
})
inputB.on('input', e => {
  b = toNum(e.target.value)
  update()
})

select(window).on('load', update)

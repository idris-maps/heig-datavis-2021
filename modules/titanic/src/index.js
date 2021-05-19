import { neuralNetwork } from 'ml5'
import { shuffle } from 'd3'
import data from './titanic.json'

const button = document.getElementById('btn')
const div = document.getElementById('results')

const render = ({ name, input, output, oui }) => {
  const el = document.createElement('p')
  el.innerHTML = [
    name, 
    `prédiction: <b>${Math.round(oui.confidence * 100)}%</b>`,
    `a survécu: <b>${output.survivant}</b>`,
    JSON.stringify(input),
  ].join(' | ')
  div.appendChild(el)
}

const train = async () => {
  div.innerHTML = ''

  const shuffled = shuffle(data)
  const testData = shuffled.filter((_, i) => i < 100)
  const trainData = shuffled.filter((_, i) => i >= 100) 

  const nn = neuralNetwork({ task: 'classification' })

  trainData.forEach(d => nn.addData(d.input, d.output))
  nn.normalizeData()

  await nn.train({ epochs: 100 })

  const results = (await Promise.all(testData.map(async d => {
    const results = await nn.classify(d.input)
    return { ...d, oui: results.find(({ label }) => label === 'oui') }
  })))
    .sort((a, b) => a.oui.confidence > b.oui.confidence ? -1 : 1)

  results.map(render)
}

button.addEventListener('click', e => {
  train()
})
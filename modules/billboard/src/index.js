import bb, { bar } from 'billboard.js'

const DATA = [
  { nom: 'Lausanne', population: 138905 },
  { nom: 'Yverdon', population: 30143 },
  { nom: 'Montreux', population: 26574 },
  { nom: 'Renens', population: 21036 },
  { nom: 'Nyon', population: 20533 },
  { nom: 'Vevey', population: 19827 },
]

bb.generate({
  data: {
    json: {
      population: DATA.map(({ population }) => population),
    },
    type: bar(),
  },
  bindto: '#graph'
})

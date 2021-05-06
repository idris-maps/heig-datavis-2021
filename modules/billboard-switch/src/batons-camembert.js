import bb, { bar, donut } from 'billboard.js'

const DATA = [
  { nom: 'Lausanne', population: 138905 },
  { nom: 'Yverdon', population: 30143 },
  { nom: 'Montreux', population: 26574 },
  { nom: 'Renens', population: 21036 },
  { nom: 'Nyon', population: 20533 },
  { nom: 'Vevey', population: 19827 },
]

const batons = {
  data: {
    json: {
      population: DATA.map(({ population }) => population),
    },
    type: bar(),
  },
  axis: {
    x: {
      type: 'category',
      categories: DATA.map(({ nom }) => nom),
    }
  },
  bindto: '#graph-1'
}

const camembert = {
  data: {
    columns: DATA.map(d => ([d.nom, d.population])),
    type: donut(),
  },
  bindto: '#graph-1'
}

let montre = 'batons'

const bouton = document.getElementById('btn-1')

bb.generate(batons)

bouton.addEventListener('click', () => {
  if (montre === 'batons') {
    bb.generate(camembert)
    montre = 'camembert'
    bouton.textContent = 'Bâtons'
  } else {
    bb.generate(batons)
    montre = 'batons'
    bouton.textContent = 'Camembert'
  }
})


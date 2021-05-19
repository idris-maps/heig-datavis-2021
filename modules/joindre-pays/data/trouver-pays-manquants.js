const geo = require('./geo.json')
const data = require('./data.json')

const paysGeo = geo.features.map(d => d.properties.NAME)
const paysData = data.map(d => d.nom)

const paysDansDataPasDansGeo = paysData.filter(d => !paysGeo.includes(d)).sort()
const paysDansGeoPasDansData = paysGeo.filter(d => !paysData.includes(d)).sort()

console.log(paysDansDataPasDansGeo)
console.log(paysDansGeoPasDansData)
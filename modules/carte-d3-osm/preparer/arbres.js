const data = require('./heig.json')
const fs = require('fs')

const result = data.features
  .filter(d => d.geometry.type === 'Point' && d.properties.natural === 'tree')
  .map(d => d.geometry.coordinates)

fs.writeFileSync('../src/arbres.json', JSON.stringify(result), 'utf-8')

const data = require('./heig.json')
const rewind = require('@mapbox/geojson-rewind')
const fs = require('fs')

const result = data.features
  .filter(d => d.geometry.type === 'Polygon' && d.properties.building)
  .map(d => rewind(d, true))

fs.writeFileSync('../src/batiments.json', JSON.stringify(result), 'utf-8')
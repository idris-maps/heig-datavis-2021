const data = require('./heig.json')
const rewind = require('@mapbox/geojson-rewind')

const result = data.features
  .filter(d => d.geometry.type === 'Polygon' && d.properties.building)
  .map(d => rewind(d, true))

console.log(
  JSON.stringify(
    result
  )
)
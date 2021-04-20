const data = require('./heig.json')

const result = data.features
  .filter(d => d.geometry.type === 'Point' && d.properties.natural === 'tree')
  .map(d => d.geometry.coordinates)

console.log(
  JSON.stringify(
    result
  )
)
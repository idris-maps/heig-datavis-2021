const data = require('./heig.json')
const fs = require('fs')

const result = data.features
  .filter(d => d.geometry.type === 'LineString' && d.properties.highway)

fs.writeFileSync('../src/routes.json', JSON.stringify(result), 'utf-8')
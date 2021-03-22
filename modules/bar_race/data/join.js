const rl = require('readline')
const positions = require('./temp/positions.json')
const countries = require('./temp/countries.json')
const regions = require('./temp/regions.json')

const years = Array.from(Array(150)).map((_, i) => i + 1871)

const reader = rl.createInterface(process.stdin)

const getRegion = name => (regions.find(d => d.name === name) || {}).six_regions

const getPosition = (name, year) => {
  const found = positions.find(d => d.year === year && d.name === name)
  return found ? found.index : 11
}

const onLine = d => {
  const name = d['geo.name']
  if (countries.includes(name)) {
    console.log(
      JSON.stringify({
        name,
        region: getRegion(name),
        data: years.map(year => [year, d[year], getPosition(name, year)])
      })
    )
  }
}

reader.on('line', d => onLine(JSON.parse(d)))


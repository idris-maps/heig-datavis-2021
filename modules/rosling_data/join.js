const regions = require('./temp/regions.json')
const lex = require('./temp/lex.json')
const pop = require('./temp/pop.json')
const gdp = require('./temp/gdp.json')

const getByGeo = (collection, geo) => {
  const found = collection.find(d => d.geo === geo)
  return found ? found.data : undefined
}

const result = regions
  .map(d => ({
    geo: d.geo,
    name: d.name,
    region: d.six_regions,
    lex: getByGeo(lex, d.geo),
    pop: getByGeo(pop, d.geo),
    gdp: getByGeo(gdp, d.geo),
  }))
  .filter(d => d.lex && d.pop && d.gdp)

console.log(JSON.stringify(result))
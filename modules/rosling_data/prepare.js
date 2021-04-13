const xlsx = require('xlsx')

const years = Array.from(Array(221)).map((_, i) => i + 1800)
const dataByYear = json => years.map(year => json[year])
const hasAllYears = data => data.every(d => d !== undefined && d !== '')

const extractXlsx = (fileName, sheet) => {
  const file = xlsx.readFile(`temp/${fileName}.xlsx`)
  return xlsx.utils.sheet_to_json(file.Sheets[sheet])
}

// extraire les données d'un fichier xlsx
// et les transformer pour avoir un tableau avec
// { geo: 'geo', data: [1, 2, 3] }
const getCollection = fileName =>
  extractXlsx(fileName, 'countries_and_territories')
    .map(d => ({ geo: d.geo, data: dataByYear(d) }))
    .filter(d => hasAllYears(d.data))

const lex = getCollection('lex')
const pop = getCollection('pop')
const gdp = getCollection('gdp')

// extraire les noms de pays et les régions de "regions.xlsx"
const regions = extractXlsx('regions', 'list-of-countries-etc')
  .map(d => ({ geo: d.geo, name: d.name, region: d.six_regions }))

// trouver les données par "geo"
const getByGeo = (collection, geo) => {
  const found = collection.find(d => d.geo === geo)
  return found ? found.data : undefined
}

// ajouter les données à chaque pays de "regions"
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

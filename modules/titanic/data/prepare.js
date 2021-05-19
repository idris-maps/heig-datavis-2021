const { csvParse } = require('d3')
const { readFileSync, writeFileSync } = require('fs')

const csv = readFileSync('titanic.csv', 'utf-8')
const json = csvParse(csv)
const result = json.map(d => ({
  name: d.Name,
  input: {
    classe: Number(d.Pclass),
    sexe: d.Sex === 'female' ? 1 : 0,
    age: Number(d.Age),
    prix: Number(d.Fare),
  },
  output: {
    survivant: d.Survived === '1' ? 'oui' : 'non'
  },
}))

writeFileSync('../src/titanic.json', JSON.stringify(result, null, 2), 'utf-8')
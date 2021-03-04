const fs = require('fs')
const d3 = require('d3')

const file = fs.readFileSync('data.csv', 'utf-8')

const { parse } = d3.dsvFormat(';')

console.log(
  parse(file)
    .map(d => ({
      elus: Number(d.anzahl_gewaehlte),
      parti: d.partei_bezeichnung_fr,
      canton: d.kanton_bezeichnung,
    }))
)

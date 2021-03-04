const fs = require('fs')

const file = fs.readFileSync('data.csv', 'utf-8')

console.log(
  JSON.stringify(
    file.split(`\n`)
      .map(line => line.split(';'))
      .map(cells => ({
        elus: Number(cells[12]),
        parti: cells[5],
        canton: cells[2],
      }))
      .filter((d, i) => i > 0 && Boolean(d.elus))
  )
)

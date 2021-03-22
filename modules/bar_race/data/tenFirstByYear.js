const rl = require('readline')

const reader = rl.createInterface(process.stdin)

const years = Array.from(Array(150)).map((_, i) => i + 1871)

let data = years.reduce((r, year) => ({ ...r, [year]: [] }), {})

reader.on('line', d => {
  const json = JSON.parse(d)
  const name = json['geo.name']
  data = years.reduce((r, year) => {
    const value = json[year]
    if (!Number.isNaN(Number(value)) && value !== '') {
      return {
        ...r,
        [year]: [...r[year], { name, value }]
      }
    }
    return r
  }, data)
})

const tenFirst = data =>
  data
    .sort((a, b) => a.value > b.value ? -1 : 1)
    .filter((_, i) => i < 10)
  

reader.on('close', () =>
  years.forEach(year =>
    console.log(
      JSON.stringify({ year, data: tenFirst(data[year]) })
    )
  )
)
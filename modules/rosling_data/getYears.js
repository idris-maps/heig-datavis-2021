const rl = require('readline')

// années de 1800 à 2020
const years = Array.from(Array(220)).map((_, i) => i + 1800)

// récupérer les données pour les années qui nous intéressent
const dataByYear = json => years.map(year => json[year])

// vérifier que nous avons toutes les données
const hasAllYears = data => data.every(d => d !== undefined && d !== '')

const reader = rl.createInterface(process.stdin)

reader.on('line', d => {
  const json = JSON.parse(d)
  const data = dataByYear(json)
  
  if (hasAllYears(data)) {
    return console.log(
      JSON.stringify({ geo: json.geo, data })
    )
  }
})

const fs = require('fs')
const rewind = require('@mapbox/geojson-rewind')

const geo = require('./geo.json')
const data = require('./data.json')
const nomsPays = require('./fix-pays.json')

// Utiliser les noms de geo.json dans data.json
const dataAvecNomsGeo = data.map(d => {
  const found = nomsPays.find(({ data }) => data === d.nom)
  return found ? { ...d, nom: found.geo } : d
})

// Trouver la valeur dans "data.json" qui correspond au pays dans "geo.json"
const trouverValeur = properties => {
  const values = dataAvecNomsGeo.filter(d => d.nom === properties.NAME)
  return values.reduce((r, d) => r + d.valeur, 0)
}

// Arrondir les coordonnées - pas besoin de précision au mm
const round = d => Math.round(d * 10000) / 10000
const roundPoint = d => d.map(round)
const roundLine = d => d.map(roundPoint)
const roundPolygon = d => d.map(roundLine)
const roundMultiPolygon = d => d.map(roundPolygon)
const arrondirCoordonnees = feature => {
  const { geometry } = feature
  return {
    ...feature,
    geometry: {
      ...geometry,
      coordinates: geometry.type === 'Polygon'
        ? roundPolygon(geometry.coordinates)
        : roundMultiPolygon(geometry.coordinates)
    }
  }
}

const result = geo.features
  .map(d => {
    const { properties } = d
    return {
      ...d,
      properties: {
        nom: properties.NAME,
        valeur: trouverValeur(properties),
      }
    }
  })
  .map(arrondirCoordonnees)
  .map(d => rewind(d, true))

fs.writeFileSync('join.json', JSON.stringify(result), 'utf-8')

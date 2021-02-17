const villes = [
  { nom: 'Lausanne', population: 138905 },
  { nom: 'Yverdon', population: 30143 },
  { nom: 'Montreux', population: 26574 },
  { nom: 'Renens', population: 21036 },
  { nom: 'Nyon', population: 20533 },
  { nom: 'Vevey', population: 19827 },
]

const nomsDesVilles = villes // <- utilisez une la méthode adaptée sur "villes"

console.log('Noms des villes', nomsDesVilles)

/*
[
  "Lausanne",
  "Yverdon",
  "Montreux",
  "Renens",
  "Nyon",
  "Vevey"
]
*/

const villesDePlusDe30000Habitants = villes

console.log('Ville de plus de 30000 habitants', villesDePlusDe30000Habitants)

/*
[
    {
      "nom": "Lausanne",
      "population": 138905
    },
    {
      "nom": "Yverdon",
      "population": 30143
    }
  ]
*/

const habitantsYverdon = villes

console.log('Nombre d\'habitants à Yverdon', habitantsYverdon)

// 30143

const sommeHabitants = villes

console.log('Nombre total d\'habitants', sommeHabitants)

// 257018




// Code pour vérifier le résultat

const correct = {
  "nomsDesVilles": [
    "Lausanne",
    "Yverdon",
    "Montreux",
    "Renens",
    "Nyon",
    "Vevey"
  ],
  "villesDePlusDe30000Habitants": [
    {
      "nom": "Lausanne",
      "population": 138905
    },
    {
      "nom": "Yverdon",
      "population": 30143
    }
  ],
  "habitantsYverdon": 30143,
  "sommeHabitants": 257018
}

const compare = (a, b) =>
  JSON.stringify(a) === JSON.stringify(b) ? 'Oui' : 'Non'

console.log(`
Réponses justes:

1. Noms des villes: ${compare(nomsDesVilles, correct.nomsDesVilles)}
2. Ville de plus de 30000 habitants: ${compare(villesDePlusDe30000Habitants, correct.villesDePlusDe30000Habitants)}
3. Nombre d\'habitants à Yverdon: ${compare(habitantsYverdon, correct.habitantsYverdon)}
4. Nombre total d\'habitants: ${compare(sommeHabitants, correct.sommeHabitants)}

`)
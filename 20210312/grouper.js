const data = require('./data.json')

// la clé sur laquelle nous souhaitons faire une moyenne par canton
const cle = 'Scenario1_RoofsOnly_PotentialSolarElectricity_GWh'

// enlever les entrées sans canton (Lichtenstein)
const cantonEstDefini = d => d.Canton
const communesSuisses = data.filter(cantonEstDefini)

/**
 * créer un objet où chaque clé est un canton
 * et la valeur est un tableau de nombres
 * 
 * {
 * "Vaud": [1, 2, 3],
 * "Zug": [1, 2, 3],
 * ...
 * }
 * 
 * c'est la constante "parCanton"
 */ 
const reducer = (r, d) => {
 const canton = d.Canton
 const prev = r[canton] || []
 return {
  ...r,
  [canton]: [...prev, d[cle]]
 }
}
const parCanton = communesSuisses.reduce(reducer, {})

/**
 * Calculer la moyenne
 * 
 * Il faut une fonction "calculerLaMoyenne" qui prends un tableau de nombre et retourne la moyenne
 * pour ça j'ai créé une fonction qui fait la somme, "calculerLaSomme"
 * 
 * "Object.keys" retourne les clés d'un objet
 * pour "parCanton", c'est un tableau de cantons (["Vaud", "Zug", ...])
 * 
 * Pour chaque clé (ici canton), chercher les valeurs et faire la moyenne
 */

const calculerLaSomme = valeurs => valeurs.reduce((r, d) => r + d, 0)
const calculerLaMoyenne = valeurs => calculerLaSomme(valeurs) / valeurs.length
const moyenneParCanton = Object.keys(parCanton)
 .map(canton => ({
  canton,
  moyenne: calculerLaMoyenne(parCanton[canton])
 }))
console.log(moyenneParCanton)
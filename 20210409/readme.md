# 9 Avril 2021

## Librairies pour graphiques simples

[Exemples graphiques en bâtons](https://observablehq.com/@idris-maps/graphiques-en-batons)

### Billboard

* [Documentation](https://naver.github.io/billboard.js/)
* [Exemples](https://observablehq.com/@idris-maps/billboard)

#### Démarrer un projet:

```
npx degit idris-maps/heig-datavis-2021/modules/billboard bb-graph
cd bb-graph
npm install
```

#### En une page

```html
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="https://unpkg.com/billboard.js@3.0.2/dist/billboard.min.css" />
    <script src="https://unpkg.com/billboard.js@3.0.2/dist/billboard.pkgd.min.js"></script>
  </head>
  <body>
    <div id="graph"></div>
    <script>
bb.generate({
  bindto: "#graph",
  data: {
    type: "bar",
    columns: [
      ["data1", 30, 200, 100, 170, 150, 250],
      ["data2", 130, 100, 140, 35, 110, 50]
    ]
  }
})
    </script>
  </body>
</html>
```

## Fichiers `xlsx`

Librairie: [`xlsx`](https://www.npmjs.com/package/xlsx)

```js
const xlsx = require('xlsx')

const file = xslx.readFile('mon_fichier.xlsx')
const json = xslx.utils.sheet_to_json(file.Sheets['Ma feuille'])
```

---

## Exercice 1

Extraire des données de [ce fichier excel](https://opentransportdata.swiss/dataset/02569ba8-b029-4d75-ad59-a6ffd4b6b569/resource/567eec7b-9ca3-465d-9f2f-89876e3bab32/download/peinaussteiger2018.xlsx) ([source](https://opentransportdata.swiss/dataset/einundaus/resource/567eec7b-9ca3-465d-9f2f-89876e3bab32))

Dans un dossier `20210409/xlsx`:

* Créez un fichier `.gitignore` avec `node_modules`
* Installez `xlsx`: `npm init -y`, puis `npm install xlsx --save`
* Créez un fichier `preparer.js` avec la préparation de données

Dans un dossier `20210409/billboard` créez un graphique billboard avec les données

---

## [Hans Rosling](https://fr.wikipedia.org/wiki/Hans_Rosling)

Relation entre richesse et espérance de vie

[![Video Hans Rosling](https://img.youtube.com/vi/jbkSRLYSojo/0.jpg)](https://www.youtube.com/watch?v=jbkSRLYSojo)

---

## Exercice 2

Fichier: `20210409/rosling.md`

Quel message Hans Rosling veut-il faire passer?

---

## Préparer les données pour le graphique Rosling

[Source](https://www.gapminder.org/data/documentation/gd000/)

### Convertir un fichier excel en JSON

### Les fichiers `ndjson`

* `json`

```json
[
  { "nom": "Lausanne", "population": 138905 },
  { "nom": "Yverdon-les-Bains", "population": 30143 },
  { "nom": "Montreux", "population": 26574 },
  { "nom": "Renens", "population": 21036 },
  { "nom": "Nyon", "population": 20533 },
  { "nom": "Vevey", "population": 19827 },
]
```

* `ndjson`

```js
{ "nom": "Lausanne", "population": 138905 }
{ "nom": "Yverdon-les-Bains", "population": 30143 }
{ "nom": "Montreux", "population": 26574 }
{ "nom": "Renens", "population": 21036 }
{ "nom": "Nyon", "population": 20533 }
{ "nom": "Vevey", "population": 19827 }
```

Librairies pour manipuler les `ndjson`

* [ndjson-utils](https://github.com/idris-maps/ndjson-utils)
* [ndjson-cli](https://www.npmjs.com/package/ndjson-cli)

Ligne de commande UNIX

* pipeline `|` ([Wikipedia](https://fr.wikipedia.org/wiki/Tube_(shell)))
* bash ([Wikipedia](https://fr.wikipedia.org/wiki/Bourne-Again_shell))

[Exemple](https://github.com/idris-maps/heig-datavis-2021/tree/master/modules/ndjson)

### Préparer les données pour le graphique de Rosling

1. Télécharger les fichiers excel
2. Les convertir en JSON
3. Extraire les données qui nous intéressent
4. Joindre les fichiers

[code](https://github.com/idris-maps/heig-datavis-2021/tree/master/modules/rosling_data)

## Le graphique Rosling

* [Code](https://github.com/idris-maps/heig-datavis-2021/tree/master/modules/rosling/src)
* [Résultat](http://heig-datavis-2021.surge.sh/rosling/)

## Graphique de type "bar race"

* [Préparation des données](https://github.com/idris-maps/heig-datavis-2021/tree/master/modules/bar_race/data)
* [Code](https://github.com/idris-maps/heig-datavis-2021/tree/master/modules/bar_race/app)
* [Résultat](http://heig-datavis-2021.surge.sh/bar-race/)

## Rendre un graphique SVG plus joli

### Textures SVG avec `<pattern>`

* [Documentation MDN](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/pattern)
* [Exemples](https://observablehq.com/@idris-maps/textures)
* Librairies [textures](https://riccardoscalco.it/textures/) pour les textures avec D3

### Filtres SVG

* [Documentation MDN](https://developer.mozilla.org/fr/docs/Web/SVG/Tutorial/Filter_effects)
* [Appliquer des filtres à une image](https://testdrive-archive.azurewebsites.net/graphics/hands-on-css3/hands-on_svg-filter-effects.htm)
* [Effet crayon](https://observablehq.com/@oliviafvane/simple-pencil-ink-pen-effect-for-svg-path-using-filters)


[![Sara Soueidan - SVG Filters](https://img.youtube.com/vi/PHKLzpt-syI/0.jpg)](https://www.youtube.com/watch?v=PHKLzpt-syI)

### Utilisation sur un graphique D3

* [Code](https://github.com/idris-maps/heig-datavis-2021/tree/master/modules/batons_texture_filter/src/index.js)
* [Résultat](http://heig-datavis-2021.surge.sh/texture-filter/)

---

## Exercice 3

Fichier: `20210409/joli.svg`

Créez un dessin SVG en utilisant des textures et des filtres

---

## Graphiques non-numériques avec D3

* [Représenter un réseau](https://observablehq.com/@idris-maps/representer-un-reseau-avec-d3)
* [Représenter une hiérarchie](https://observablehq.com/@idris-maps/d3-hierarchy-tree)

---

## Exercice 4

Fichier: `20210409/d3.md`

Quelles fonctions D3 avez vous découvert aujourd'hui? À quoi servent-elles?

---

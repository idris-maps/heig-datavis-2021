# 5 Mars 2021

---

## Exercice 1

fichier: `/20210305/exercice_1.md`

Analysez les deux visualisations [ici](exercice_1.md)

Pour chacune des deux visualisations:

- décrivez quelle est l'intention des auteurs
- en quoi les choix, de données ou de type de visualisation, aident à faire passer le message souhaité?
- qu'est ce qui est omis?

---

## Les structures de données en javascript

* [types primitifs](https://observablehq.com/@idris-maps/structure-de-donnees-javascript)
* [méthodes sur une liste (Array)](https://observablehq.com/@idris-maps/methodes-sur-une-liste-array)

## Node js

* [Site](https://nodejs.org)
* [Page wikipedia](https://fr.wikipedia.org/wiki/Node.js)
* [Exemple de serveur](server.js)

---

## Exercice 2

fichier: `/20210305/exercice_2.js`

* Copiez le fichier [exercice_2.js](https://raw.githubusercontent.com/idris-maps/heig-datavis-2021/master/20210305/exercice_2.js) dans `/20210305/exercice_2.js`
* Transformez la liste de villes pour obtenir les données souhaitées
* Pour voir si vous avez vu juste, lancez `node exercice1` depuis le dossier `20210305`

---

## Préparer des données

[Exemples](https://github.com/idris-maps/heig-datavis-2021/blob/master/modules/preparer_des_donnees/readme.md)

---

## Exercice 3

* Trouvez et préparez un jeu de données pour faire un graphique en bâtons
* Ajoutez un fichier `20210305/data.md` où vous expliquez ce que vous avez fait
* Le résultat est un fichier `20210305/data.json`avec une liste d'objets contenant un nom pour la légende et une valeur numérique


Données proposées: [Potentiel d'énergie solaire des communes suisses](http://www.uvek-gis.admin.ch/BFE/ogd/52/Solarenergiepotenziale_Gemeinden_Daecher_und_Fassaden.json) en `json`

---

## Conversion des examples observable en js

Prenons par exemple le premier graphique en bâtons [ici](https://observablehq.com/@idris-maps/graphiques-en-batons).

```js
viewof d3view = {
  const WIDTH = width
  const HEIGHT = width / 3
  const container = DOM.svg(WIDTH, HEIGHT)
  const svg = d3.select(container)
  /*
    vous pouvez reprendre tout ce qui est ici
  */
  return container
}
```

* `width` est une valeur dynamique crée par observable
* `DOM` est spécifique à observable

Quand vous créez votre propre site:

* Définissez `WIDTH` et `HEIGHT`, par exemple:

```js
const WIDTH = 300
const HEIGHT = 100
```

* Définissez le svg dans le HTML:

```html
<svg id="mon-graph" width="300" height="100"></svg>
```

puis dans le javascript: 

```js
const svg = d3.select('#mon-graphique')
```

Dans observable: l'équivalant est:

```js
const container = DOM.svg(300, 100)
const svg = d3.select(container)
```

Si vous n'avez pas de `<svg>` dans le HTML:

```js
const body = d3.select('body')
const svg = body.append('svg')
  .attr('width', 300)
  .attr('height', 100)
```

---

## Resources D3

### Tutoriels

* [Tutoriels officiels](https://github.com/d3/d3/wiki/Tutorials)
* [Lets make a bar chart](https://observablehq.com/@d3/lets-make-a-bar-chart) par [Mike Bostock](https://observablehq.com/@mbostock)
* [How to learn D3.js](https://wattenberger.com/blog/d3) par [Amelia Wattenberger](https://wattenberger.com/)
* [Introduction to D3](https://observablehq.com/@mitvis/introduction-to-d3) par [MIT visualization group](http://vis.csail.mit.edu/)
* [Dashing d3.js](https://www.dashingd3js.com/d3-tutorial/d3-js-first-steps)

### Exemples

* [D3 gallery](https://observablehq.com/@d3/gallery)
* [Shirley Wu](https://sxywu.com/)
* [Danielle Carrick](http://daniellecarrick.com/)
* [Nadieh Bremer](https://www.visualcinnamon.com/)


## Dans D3, pourquoi `.enter()`?

* [exemple](http://heig-datavis-2021.surge.sh/enter_update_exit)
* [code](https://github.com/idris-maps/heig-datavis-2021/tree/master/modules/enter_update_exit)

## Graphique en bâtons

### Dessiner les bâtons

![Dimension](https://raw.githubusercontent.com/idris-maps/heig-datavis-2020/master/modules/graphique_batons_1/dimensions_batons.png)

* [code](https://github.com/idris-maps/heig-datavis-2021/blob/master/modules/batons/batons_d3_v1/src/index.js)
* [résultat](http://heig-datavis-2021.surge.sh/batons/d3_v1)

### Ajouter les axes

![Place pour les axes](https://raw.githubusercontent.com/idris-maps/heig-datavis-2020/master/modules/graphique_batons_2/dimensions.png)

* [code](https://github.com/idris-maps/heig-datavis-2021/blob/master/modules/batons/batons_d3_v2/src/index.js)
* [résultat](http://heig-datavis-2021.surge.sh/batons/d3_v2)

---

## Exercice 4

Fichier `20210305/d3.md`

Hormis `select`, quelles fonctions de d3, ont été utilisées pour le graphique en bâtons?

Pour chaque fonction, décrivez à quoi elle sert et comment elle est utilisée.

---

### Exercice 5

Créez un graphique en bâtons avec les données de l'exercice 3.

Pour copier le graphique en bâtons créé plus haut, allez dans votre dossier `20210305` et:

```
npx degit idris-maps/heig-datavis-2021/modules/batons/batons_d3_v2 batons
cd batons
npm install
```

Pour démarrer le serveur de dev:

```
npm run dev
```

Remplacez `data` dans `src/index.js` et mettez à jour ce qu'il faut. Regardez les attributs qui dépendent des données (avec `d =>`).

---

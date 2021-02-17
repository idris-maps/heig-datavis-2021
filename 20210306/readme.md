# 6 Mars 2021

---

## Exercice 1

fichier: `/20210306/exercice_1.md`

Analysez les deux visualisations [ici](exercice_1.md)

Pour chacune des deux visualisations:

- décrivez quelle est l'intention des auteurs
- décrivez en quoi les choix, de données ou de type de visualisation, aident à faire passer le message souhaité
- qu'est ce qui est omis?

---

## Les structures de données en javascript

* [types primitifs](https://observablehq.com/@idris-maps/structure-de-donnees-javascript)
* [méthodes sur une liste (Array)](https://observablehq.com/@idris-maps/methodes-sur-une-liste-array)

---

## Exercice 2

fichier: `/20210306/exercice_2.js`

* Copiez le fichier [exercice_1.js](https://raw.githubusercontent.com/idris-maps/heig-datavis-2021/master/20210306/exercice_1.js) dans `/20210306/exercice_2.js`
* Transformez la liste de villes pour obtenir les données souhaitées
* Pour voir si vous avez vu juste, lancez `node exercice1` depuis le dossier `20210306`

---

## Node js

* [Site](https://nodejs.org)
* [Page wikipedia](https://fr.wikipedia.org/wiki/Node.js)
* [Exemple de serveur](server.js)

---

## Préparer des données

[Exemples](https://github.com/idris-maps/heig-datavis-2021/blob/master/modules/preparer_des_donnees/readme.md)

---

## Exercice 3

* Trouvez et préparez un jeu de données pour faire un graphique en bâtons.
* Ajoutez un fichier `20210306/data.md` où vous expliquez ce que vous avez fait
* Le résultat est un fichier `20210306/data.json`avec une liste d'objets contenant un nom pour la légende et une valeur numérique.

---

## Manipulation DOM

Exemples:

* [sans librairie](https://github.com/idris-maps/heig-datavis-2021/blob/master/modules/manipulation_dom/js/index.html) - [résultat](http://heig-datavis-2021.surge.sh/dom/js/)
* [avec d3](https://github.com/idris-maps/heig-datavis-2021/tree/master/modules/manipulation_dom/d3) - [résultat](http://heig-datavis-2021.surge.sh/dom/d3/)
* [avec react](https://github.com/idris-maps/heig-datavis-2021/tree/master/modules/manipulation_dom/react) - [résultat](http://heig-datavis-2021.surge.sh/dom/react/)
* [avec svelte](https://github.com/idris-maps/heig-datavis-2021/tree/master/modules/manipulation_dom/svelte) - [résultat](http://heig-datavis-2021.surge.sh/dom/svelte/)

### "Bundlers"

* [rollup](https://rollupjs.org/guide/en/)
* [parcel](https://parceljs.org/)
* [esbuild](https://esbuild.github.io/)
* [snowpack](https://www.snowpack.dev/)
* [webpack](https://webpack.js.org/)

### Télécharger une librairie

```
npm install d3 --save
```

## Graphique en bâtons

![Dimension](https://raw.githubusercontent.com/idris-maps/heig-datavis-2020/master/modules/graphique_batons_1/dimensions_batons.png)

* [code](https://github.com/idris-maps/heig-datavis-2021/blob/master/modules/batons/batons_d3_v1/src/index.js)
* [résultat](http://heig-datavis-2021.surge.sh/batons/d3_v1)

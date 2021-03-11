# 12 Mars 2021

## Utiliser un fichier JSON dans un projet web

1. Installer le "plugin" rollup `@rollup/plugin-json`
2. L'ajouter à `rollup.config.js`

En haut du document avec les autres `import`

```js
import json from '@rollup/plugin-json'
```

```js
{
  // ...
  plugins: [
    // autres plugin...
    json(),
  ]
}
```

3. Maintenant vous pouvez importer un fichier JSON dans votre code

```js
import data from './data.json'
```

## Faute de frappe de ma part

J'ai fait une faute de frappe dans les fichiers `.gitignore` des projets à télécharger avec `degit`. Ce devrait être `node_modules` avec un `s`. Si vous avez utilisé cette manière de démarrer des projets dans vos "repos", mettez à jour le `.gitignore`.

## Manipulation de données en JS (suite)

### Utiliser une chaîne de caractères pour définir la clé d'un objet

```js
const key = 'ma_cle'

const obj = { [key]: 'une valeur' }

// { ma_cle: 'une valeur' }
```

### Lister les clés d'un objet

```js
const obj = {
  a: 1,
  b: 'deux'
}

Object.keys(obj)

// ['a', 'b']
```

### Utiliser `.reduce` pour grouper des données

```js
const data = [
  { nom: 'Alice', examen: 1, note: 5 },
  { nom:  'Bob', examen: 1, note: 4 },
  { nom: 'Alice', examen: 1, note: 6 },
  { nom:  'Bob', examen: 1, note: 3 },
]

const notesParEleve = data.reduce((r, d) => {
  const notes = r[d.nom] || []
  return { ...r, [d.nom]: [...notes, d.note] }
}, {})

// { Alice: [5, 6], Bob: [4, 3] }

const somme = notes => notes.reduce((r, d) => r + d, 0)
const moyenne = notes => somme(notes) / notes.length

const moyenneParEleve = Object.keys(notesParEleve)
  .map(nom => ({ nom, moyenne: moyenne(notesParEleve[nom]) }))

// [{ nom: 'Alice', moyenne: 5.5, nom: 'Bob', moyenne: 3.5 }]
```

[exemple avec les données de potentiel solaire](grouper.js)

## `ramda` une librairie pour faciliter la manipulation de données

* [Cours](https://observablehq.com/@idris-maps/methodes-ramda)
* [Documentation](https://ramdajs.com/docs/)

## API Rest

Une convention pour interagir avec un serveur.

* [Article wikipédia](https://fr.wikipedia.org/wiki/Representational_state_transfer)
* [Méthodes HTTP](https://www.restapitutorial.com/lessons/httpmethods.html)

Exemple de resource: `users`

* GET `/users` retourne tous les utilisateurs
* GET `/users/1` pour avoir un utilisateur en particulier où `1` est l'identifiant utilisateur
* POST `/users` pour créer un utilisateur
* PATCH `/users/1` pour mettre à jour
* PUT `/users/1` pour remplacer un utilisateur
* DELETE `/users/1` pour effacer un utilisateur

[Exemple de serveur](https://github.com/idris-maps/heig-datavis-2021/tree/master/modules/rest/server.js)

### Interagir avec une API Rest

1. Avec la console: [curl](https://curl.se/)

```
curl -X POST \
  -H "Content-Type: application/json" \
  -d '{"name": "Machin", "city": "Ma ville"}' \
  http://localhost:3000/users
```

2. Dans VS code avec le "plugin" [RESt client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client)

[Exemple](https://github.com/idris-maps/heig-datavis-2021/tree/master/modules/rest/run.http)

3. Dans le navigateur avec [`fetch`](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)

```js
fetch('http://localhost:3000/users')
  .then(r => r.json())
  .then(data => /* faire quelque chose avec les données ici */)
```

4. Dans node avec `node-fetch`

Doit être installé:

```
npm install node-fetch --save
```

### Trouver une API Rest

* [https://github.com/public-apis/public-apis](https://github.com/public-apis/public-apis)
* [https://github.com/n0shake/Public-APIs](https://github.com/n0shake/Public-APIs)

---

## Exercice 1

Fichier: `20210312/fetch_rest.js`

Utilisez
  1. les resources `posts` et `users` de [https://jsonplaceholder.typicode.com/](https://jsonplaceholder.typicode.com/)
  2. `fetch` pour télécharger les données
  3. `ramda` pour créer une liste qui ressemble à ça:

```js
[
  {
    nom_utilisateur: 'Machin',
    ville: 'Truc',
    nom_companie: 'Bidule',
    titres_posts: [
      'Titre 1',
      'Titre 2',
    ]
  },
  // ...
]
```

Commencez avec les utilisateurs. Il faut extraire le `nom_utilisateur` (`username`), la `ville` (`address.city`) et le `nom_companie` (`company.name`).

Après pour chaque utilisateur, allez chercher les `titres_posts` (les `title` dans la ressource `posts`).

---

## Une visualisation est une abstraction de la réalité

et comment faire mentir des données

[Présentation](http://heig-datavis-2021.surge.sh/abstraction/)

Video (à partir de 14 minutes)

[![The listening post](https://upload.wikimedia.org/wikipedia/en/d/de/Listening_Post_title_card.jpg)](https://www.aljazeera.com/program/the-listening-post/2021/2/13/project-wave-exposed-media-corruption-scandalises-south-africa)

* [Alberto Cairo](http://www.thefunctionalart.com/)
* [Mona Chalabi](https://monachalabi.com/)
* [W.E.B DuBois](https://usafacts.org/articles/web-du-bois-hand-drawn-data-visualizations-black-americans/)

## Réactivité

* [Wikipedia](https://fr.wikipedia.org/wiki/Programmation_r%C3%A9active)

[![Rich Harris - Rethinking reactivity](https://img.youtube.com/vi/AdNJ3fydeao/0.jpg)](https://www.youtube.com/watch?v=AdNJ3fydeao)

Dans [Observable](https://observablehq.com/@idris-maps/observable), une cellule peut être basées sur d'autres cellules. Comme dans "excel".

Réactivité avec [svelte](https://svelte.dev)

* [Exemple](http://heig-datavis-2021.surge.sh/reactivite/svelte/)
* [Code](https://github.com/idris-maps/heig-datavis-2021/tree/master/modules/reactivite/svelte/src/App.svelte)

Pour avoir le même résultat avec D3

* [Résultat](http://heig-datavis-2021.surge.sh/reactivite/d3)
* [Code](https://github.com/idris-maps/heig-datavis-2021/tree/master/modules/reactivite/d3/src/index.js)

---

## Exercice 2

Fichier: `20210312/reactivite.md`

- Décrivez ce qu'est la programmation réactivité?
- Comment l'utiliser en javascript?
- Quelle est l'alternative?

---

## Combiner svelte et d3

* [Graphique en bâtons](https://github.com/idris-maps/heig-datavis-2021/blob/master/modules/batons/batons_svelte/src/App.svelte)

## Animer un graphique

* [Transitions avec D3](https://observablehq.com/@idris-maps/transitions-avec-d3)
* Bâtons animés avec D3
  - [Exemple](http://heig-datavis-2021.surge.sh/batons_anim/d3/)
  - [Code](https://github.com/idris-maps/heig-datavis-2021/tree/master/modules/batons_anim/batons_anim_d3/src/index.js)
* Bâtons animés avec svelte
  - [Exemple](http://heig-datavis-2021.surge.sh/batons_anim/svelte/)
  - [Code](https://github.com/idris-maps/heig-datavis-2021/tree/master/modules/batons_anim/batons_anim_svelte/src/App.svelte)

---

## Exercice 3

Fichier: `20210312/transition.md`

Comment fonctionnent les transitions en D3 et en svelte?

---

## Autres graphiques D3

[Cours](https://observablehq.com/@idris-maps/introduction-a-d3)

* Camembert avec `d3.arc()` et `d3.pie()`
* Graphique linéaire avec `d3.line()` ou `d3.area()`

---

## Exercice 4

Créez un graphique dans un dossier `20210312/graph` avec les données de votre choix. Le graphique doit soit contenir une animation, soit être autre chose qu'un graphique en bâtons.

---

## Exercice 5

Fichier `20210312/d3.md`

Quelles nouvelles fonctions D3 avons nous vu aujourd'hui? Expliquez à quoi elles servent.

---
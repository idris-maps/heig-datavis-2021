# 23 Avril 2021

## Tirer des données de sites web - "Scraping"

### 1. Exécuter de la manipulation DOM dans la console du navigateur

[Pages wikipedia des cantons](https://fr.wikipedia.org/wiki/Canton_(Suisse)#Donn%C3%A9es_cantonales)

```js
var cl = (el, tag) => Array.from(el.getElementsByTagName(tag))

cl(temp0, 'tr')
  .map(tr => {
    var th = cl(tr, 'th')
    var td = cl(tr, 'td')

    return {
      abbrev: th[0].textContent.trim(),
      page: td[0].getElementsByTagName('a')[0].getAttribute('href'),
      nom: td[0].getElementsByTagName('a')[0].textContent,
    }
  })
```

### 2. Automatiser la manipulation DOM avec `cheerio`

[cheerio](https://cheerio.js.org/) utilise la syntaxe jQuery pour node

[Exemple](https://github.com/idris-maps/heig-datavis-2021/tree/master/modules/scrape_cheerio)

### 3. Écouter les requêtes que fait le navigateur

Exemples:

1. [Chausettes galaxus](https://github.com/idris-maps/heig-datavis-2021/tree/master/modules/scrape_chaussettes)
2. [Les titres du 19h30](https://github.com/idris-maps/heig-datavis-2020/blob/master/modules/19h30/scrape.md) - cours de l'année dernière - NE FONCTIONNE PLUS

### 4. Automatiser le navigateur avec `puppeteer`

[puppeteer](https://github.com/puppeteer/puppeteer/#puppeteer)

Exemples:

1. [Prendre des captures d'écran](https://github.com/idris-maps/heig-datavis-2021/tree/master/modules/puppet/capture.js)
2. [Remplir un formulaire et extraire des données](https://github.com/idris-maps/heig-datavis-2021/tree/master/modules/puppet/form.js)

---

## Exercice 1

Dans un dossier `20210430/scraping`, récupérez les données de [cette page](https://www.webscraper.io/test-sites/e-commerce/allinone/computers/laptops).

Utilisez une des techniques décrites plus haut.

Le résultat doit ressembler à:

```json
[
  {
    "produit": "Asus VivoBook X441NA-GA190"
    "prix": "$295.99",
    "etoiles": 3,
  },
  {
    "produit": "Prestigio SmartBook 133S Dark Grey"
    "prix": "$299.00",
    "etoiles": 2,
  },
  ...
]
```

Le dossier doit contenir un fichier `20210430/scraping/readme.md` où vous décrivez votre approche.

Si vous installez des librairies, n'oubliez pas d'ajouter un fichier `.gitignore` avec:

```
node_modules
```

---

## Canvas

* [Tutoriel MDN](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial)
* [Documentation MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D)
* [Cours](https://observablehq.com/@idris-maps/canvas)

### Comparaison avec le SVG

Avantages `<canvas>`:

* plus pérformant (plus d'éléments, animations...)
* peut être sauvé en tant qu'image

Avantages `<svg>`:

* fait partie du DOM, nous pouvons accéder aux éléments avec du javascript et y ajouter des événements
* peut être créé à l'avance, pas besoin de javascript pour le rendu

---

## Exercice 2

Fichier `20210430/canvas.html`

Faites un dessin sur l'élément `<canvas>`

```html
<html>
  <body>
    <canvas id="mon-dessin" width="500" height="300"></canvas>
    <script>

const canvas = document.getElementById('mon-dessin')
const context = canvas.getContext('2d')

// dessinez ici

    </script>
  </body>
</html>
```

---

## Couleurs pour visualisations

* [colorbrewer](https://colorbrewer2.org)
* [d3-scale-chromatic](https://github.com/d3/d3-scale-chromatic/blob/master/README.md#api-reference)

## "Scrollytelling"

* [Exemple 1](https://shorthand.com/the-craft/an-introduction-to-scrollytelling/index.html)
* [Exemple 2](https://svearikes-graenser.surge.sh/)
* [svelte-scroller](https://github.com/sveltejs/svelte-scroller)
  - [Demo](https://svelte.dev/repl/76846b7ae27b3a21becb64ffd6e9d4a6?version=3.37.0)
  - [Exemple](https://svelte.dev/repl/235597817ab94bad952909ddb3f4169b?version=3.37.0)

## Vegalite

* [site](https://vega.github.io/vega-lite/)
* [éditeur en ligne](https://vega.github.io/editor/)
* [utilisation dans le navigateur](https://vega.github.io/vega-lite/usage/embed.html) - pas recommandé
* [utilisation dans observable](https://observablehq.com/@observablehq/tutorial-3-visualizing-data)
* [utilisation en ligne de commande](https://vega.github.io/vega-lite/usage/compile.html#cli)

# 5 Mai 2021

## Publier votre site

### Créer les fichiers finaux

En développant vous lancez la command `npm run dev`. Quand le site est prêt, il vous faut créer une version optimisée avec `npm run build` avant de publier.

### Hébergements gratuits

#### [Github pages](https://pages.github.com/)

Créer un repo appellé `VOTRE_IDENTIFIANT_GITHUB.github.io` et mettez le site à publier. Vous ne pouvez utiliser cette solution que pour publier un seul site.

**Attention** ce repo ne doit contenir que le résultat final et non vos fichiers de développement (voir "Créer les fichiers finaux" ci-dessus).

#### [Surge](https://surge.sh/)

Installez la librairie `surge` (globalement)

```
npm install surge -g
```

Lancez la commande:

```
surge
```

La première fois, vous allez devoir entrer votre adresse email et un mot de passe. Utilisez une adresse à laquelle vous avez accès, il vont vous demandez de confirmer l'adresse avec un lien envoyé.

Vous pouvez passer des arguments à la commande `surge`:

```
surge public --domain mon-domaine.surge.sh
```

où `public` est le dossier à publier et `mon-domaine.surge.sh` l'adresse à laquelle vous souhaitez le publier.

#### [Vercel](https://vercel.com/)

Enregistrez-vous avec votre compte github.

Installez la librairie `vercel` (globalement):

```
npm install vercel -g
```

Lancez la commande:

```
vercel
```

et répondez aux questions

#### [Netlify](https://app.netlify.com)

Enregistrez-vous avec votre compte github.

Vous pouvez charger le dossier à publier directement sur leur site.

---

## Exercice 1

Utilisez une des méthodes ci-dessus pour héberger une page `index.html`

Fichier: `20210507/site.txt` avec le lien vers votre site.

---

## Modifier un graphique billboard

* [Exemple](https://github.com/idris-maps/heig-datavis-2021/tree/master/modules/billboard-switch)

## Géolocalisation

* Avec [leaflet](https://leafletjs.com/examples/mobile/)
* [API de géolocalisation](https://developer.mozilla.org/fr/docs/Web/API/Geolocation_API)

## Trouver des points OpenStreetMap autour d'une position

* Allez sur [overpass turbo](https://overpass-turbo.eu/) et copiez la requête

```js
await fetch("https://overpass-api.de/api/interpreter", {
    "credentials": "omit",
    "headers": {
        "User-Agent": "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:88.0) Gecko/20100101 Firefox/88.0",
        "Accept": "*/*",
        "Accept-Language": "en-US,en;q=0.5",
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
    },
    "referrer": "https://overpass-turbo.eu/",
    "body": "data=node%5Bamenity%3Ddrinking_water%5D(41.886911452731844%2C12.483644485473633%2C41.893093272054095%2C12.500338554382324)%3Bout%3B",
    "method": "POST",
    "mode": "cors"
});
```

Modifiez `body` pour pouvoir y insérer les coordonnées, `bbox` et d'autres valeurs `amenity`

```js
const getAmenities = async (amenity, bbox) => {
 const response = await fetch("https://overpass-api.de/api/interpreter", {
   // comme plus haut
    "body": `data=node%5Bamenity%3D${amenity}%5D(${bbox.join('%2C')})%3Bout%3B`,
  })

  return response.json()
}
```

* Utilisez `turf` pour créer un carré à partir d'un point

```js
import { circle, bbox } from '@turf/turf'

const point = [0, 0]
const cercle = circle(point, 1) // unité est km par défaut
const carre = bbox(cercle)
```

* Chercher les données

```js
getAmenities('bar', carre)
  .then(data => {
    // faire quelque chose avec les données
  })
```
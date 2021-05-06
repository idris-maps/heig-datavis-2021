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
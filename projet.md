# Projet

## But

- Créer une visualisation à partir de un ou plusieurs jeux de données
- Le choix des types, et le nombre, de visualisations est libre
- Le tout doit faire passer un message, raconter une "histoire" (décrivez le contexte dans lequel s'inscrivent vos graphiques)

## Délais

- Le projet doit être présenté lors du cours du 21 Mai 2021
- Il sera possible de faire des ajustements après cette date

## Format

- Le produit final doit être sous forme de site publié
- Le code source du site et la méthode de préparation des données doit être accessible sur github

### Fichier `projet/read.me` dans votre repo de cours

- Doit inclure les liens vers le site publié ainsi que vers le code utilisé
- Doit décrire où vous avez trouvé les données et les choix que vous fait pour les préparer
- Avec qui vous avez travaillé, si vous avez fait le projet à deux

### Un dossier avec le code source

- Celui-ci peut être le dossier `projet` de votre repo de cours, ou un autre repo
- Doit contenir le code pour la préparation de données et pour le site

Suggestion de structure du dossier:

```
├── data
│   ├── preparerX.js
│   ├── x.csv
│   └── x.json
├── readme.md
└── src
    ├── index.js
    └── autre.js
```

où `data` contient le code pour la préparation de données et `src` celui de votre page web

Dépendant des librairies que vous souhaitez utiliser, vous pouvez reprendre les dossiers suivants pour démarrer:

* pour `D3`: `idris-maps/heig-datavis-2021/modules/batons/batons_d3_v2`
* pour `svelte`: `idris-maps/heig-datavis-2021/modules/batons/batons_svelte`
* pour `billboard`: `idris-maps/heig-datavis-2021/modules/billboard`

```
npx degit DOSSIER_CI_DESSUS projet
cd projet
npm install
```

où `projet` est le nom du dossier avec le code source.

Si vous utilisez d'autres librairies, installez les avec:

```
npm install NOM_DE_LA_LIBRAIRIE --save
```

Si vous faites la mise en place vous même, n'oubliez pas un fichier `.gitignore` avec

```
node_modules
```



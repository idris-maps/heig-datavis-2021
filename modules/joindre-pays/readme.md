# Joindre des données à des géométries

Quand nous n'avons pas d'identifiant commun dans les deux jeux de données et devons utiliser le nom de pays.

Les données:

* `data.json` - données avec la valeur que nous souhaitons ajouter
* `geo.json` - geometries des pays

1. Trouver les noms de pays dans un fichier pas dans l'autre: `trouver-pays-manquants.js`

2. Créer un fichier de correspondances à la main: `fix-pays.json`

3. Joindre les deux: `joindre.json`
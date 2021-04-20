# 23 Avril 2021 - Cartographie

* [Historique](http://heig-datavis-2021.surge.sh/cartographie)

## Données cartographiques

### Formats

* [geojson](https://observablehq.com/@idris-maps/donnees-cartographiques)
* [shapefile](https://fr.wikipedia.org/wiki/Shapefile)
* [osm](https://wiki.openstreetmap.org/wiki/OSM_XML)
* [WKT](https://en.wikipedia.org/wiki/Well-known_text_representation_of_geometry)

### Convertir en geojson

* [shapefile](https://www.npmjs.com/package/shapefile)
* [osmtogeojson](https://www.npmjs.com/package/osmtogeojson)

### Trouver des données

Pour les données mondiales: [natural earth](https://www.naturalearthdata.com/downloads/)

**[Open street map](https://www.openstreetmap.org/)**

[Liste des attributs](https://wiki.openstreetmap.org/wiki/Map_Features)

1. Toutes les données dans une zone restreinte

```
curl "https://api.openstreetmap.org/api/0.6/map?bbox=6.645,46.779,6.65,46.783" > heig.osm
```

2. Toutes les données sur une zone plus large (canton, pays...)

[geofabrik](https://download.geofabrik.de/)

3. Pour des données plus spécifiques

[overpass turbo](https://overpass-turbo.eu/)

Utilisation:

  * Cherchez Yverdon dans le champs au dessus de la carte
  * Quand vous voyez Yverdon sur la carte, appuyez sur le bouton "Wizard"
  * Entrez `amenity=restaurant` (voyez la liste de toutes les valeurs d'`amenity` [ici](https://wiki.openstreetmap.org/wiki/Map_Features#Amenity))
  * Appuyez sur le bouton `build and run query`
  * Quand vous voyez les points s'afficher sur la carte, appuyez sur `Export` et choisissez `GeoJSON`

4. Trouver une adresse ou une ville

[nominatim](https://nominatim.org/release-docs/develop/api/Search/)

```
curl https://nominatim.openstreetmap.org/search?city=yverdon&format=json
```

**Données pour la Suisse**

1. [opendata.swiss](https://opendata.swiss/fr/dataset?res_format=SHAPEFILE&keywords_en=official-geodata&page=2).
2. [Régions administratives (communes, districts et cantons)](https://observablehq.com/@idris-maps/swiss-geodata).

Pour convertir les coordonnées suisses en WGS: [swiss-projection](https://www.npmjs.com/package/swiss-projection)

## Créer une carte avec D3

[Cours](https://observablehq.com/@idris-maps/la-cartographie-avec-d3)

### Exemple 1

* [Préparation des données au format Shapefile](https://github.com/idris-maps/heig-datavis-2021/tree/master/modules/carte-d3-shp/preparer/run.sh)
* [Code](https://github.com/idris-maps/heig-datavis-2021/tree/master/modules/carte-d3-shp/src/index.js)
* [Résultat](https://heig-datavis-2021.surge.sh/carte-d3-shp/)

Utiliser comme point de départ:

```
npx degit idris-maps/heig-datavis-2021/modules/carte-d3-shp carte
cd carte
npm install
```

### Exemple 2

* [Préparation des données au format OSM](https://github.com/idris-maps/heig-datavis-2021/tree/master/modules/carte-d3-osm/preparer/run.sh)
* [Code](https://github.com/idris-maps/heig-datavis-2021/tree/master/modules/carte-d3-osm/src/index.js)
* [Résultat](https://heig-datavis-2021.surge.sh/carte-d3-osm/)

Utiliser comme point de départ:

```
npx degit idris-maps/heig-datavis-2021/modules/carte-d3-osm carte
cd carte
npm install
```

### Trouver des coordonnées

Pour trouver les coordonnées nécessaires pour télécharger les données OSM, utilisez cet [outil](https://observablehq.com/@idris-maps/trouver-des-coordonnees)

---

## Exercice 1

Dossier `20210423/carte-d3`

Créez une carte D3 avec les données de votre choix.

---

## Créer une carte avec leaflet

* [Documentation](https://leafletjs.com/)
* [Leaflet et fonds de carte](https://observablehq.com/@idris-maps/leaflet-et-fond-de-carte-en-tuiles)
* [Combiner D3 et leaflet](https://observablehq.com/@idris-maps/leaflet-et-d3)

## Exemple

* [Code](https://github.com/idris-maps/heig-datavis-2021/tree/master/modules/carte-leaflet/src/index.js)
* [Résultat](https://heig-datavis-2021.surge.sh/carte-leaflet/)

Utiliser comme point de départ:

```
npx degit idris-maps/heig-datavis-2021/modules/carte-leaflet carte
cd carte
npm install
```

---

## Exercice 2

Dossier `20210423/carte-leaflet`

* Utilisez [overpass](https://overpass-turbo.eu/) pour extraire les données de votre choix. ([attributs OSM](https://wiki.openstreetmap.org/wiki/Map_Features))
* Représentez les avec `leaflet`
* Ajouter un [fond de carte](https://leaflet-extras.github.io/leaflet-providers/preview/)

---

## Manipuler les données cartographiques

* [topojson](https://observablehq.com/@idris-maps/topojson)
* [turf](https://turfjs.org/docs)

---

## Exercice 3

Fichier: `librairies-carto.md`

1. Pourquoi doit-on projeter des données cartographiques?
2. Qu'est ce qu'Open street map?
3. Quelles fonctions D3 sont spécifiques à la cartographie?
4. À quoi sert le format topojson? En quoi est-il différent du geojson?
5. À quoi sert `turf`? Décrivez ce que font trois fonctions de cette libraire

---

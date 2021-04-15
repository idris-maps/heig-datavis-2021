# 23 Avril 2021 - Cartographie

* [Historique](http://heig-datavis-2021.surge.sh/cartographie)

## Données cartographiques

### Formats

* [geojson](https://observablehq.com/@idris-maps/donnees-cartographiques)
* [shapefile](https://fr.wikipedia.org/wiki/Shapefile)
* [osm](https://wiki.openstreetmap.org/wiki/OSM_XML)

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

### Créer une carte web


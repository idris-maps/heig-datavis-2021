# télécharger les données
curl -LO https://www.naturalearthdata.com/http//www.naturalearthdata.com/download/110m/physical/ne_110m_land.zip

# extraire les fichiers
unzip ne_110m_land.zip

# convertir en json
npx shp2json ne_110m_land > data.json

mapshaper data.json -simplify 0.2 -o ../src/data.json


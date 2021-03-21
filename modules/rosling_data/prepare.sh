# télécharger les fichiers

curl https://raw.githubusercontent.com/Gapminder-Indicators/lex/master/lex-by-gapminder.xlsx \
  > temp/lex.xlsx

curl https://raw.githubusercontent.com/Gapminder-Indicators/gdppc_cppp/master/gdppc_cppp-by-gapminder.xlsx \
  > temp/gdp.xlsx

curl https://raw.githubusercontent.com/Gapminder-Indicators/pop/master/pop-by-gapminder.xlsx \
  > temp/pop.xlsx

# télécharger le fichier avec les régions à la main https://www.gapminder.org/data/geo/
# il est hébergé sur google docs

# Transformer les fichiers en JSON

npx from-xlsx -f temp/lex.xlsx -s countries_and_territories -n true \
  | node getYears \
  | npx reduce \
  > temp/lex.json

npx from-xlsx -f temp/gdp.xlsx -s countries_and_territories -n true \
  | node getYears \
  | npx reduce \
  > temp/gdp.json

npx from-xlsx -f temp/pop.xlsx -s countries_and_territories -n true \
  | node getYears \
  | npx reduce \
  > temp/pop.json

npx from-xlsx -f temp/regions.xlsx -s list-of-countries-etc -n true \
  | npx pick geo,name,six_regions \
  | npx reduce \
  > temp/regions.json

# Joindre les 4 fichiers

node join
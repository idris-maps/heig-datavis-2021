curl https://raw.githubusercontent.com/idris-maps/heig-datavis-2021/master/modules/rosling_data/temp/regions.json \
  > temp/regions.json

curl https://raw.githubusercontent.com/Gapminder-Indicators/gdppc_cppp/master/gdppc_cppp-by-gapminder.xlsx \
  > temp/gdp.xlsx

npx from-xlsx -f temp/gdp.xlsx -s countries_and_territories -n true \
  | node tenFirstByYear \
  | npx reduce 'Array.from(new Set([...r, ...d.data.map(({ name }) => name) ]))' \
  > temp/countries.json

npx from-xlsx -f temp/gdp.xlsx -s countries_and_territories -n true \
  | node tenFirstByYear \
  | npx map 'd.data.map((x, i) => ({ year: d.year, name: x.name, index: i}))' \
  | npx reduce '[...r, ...d]' \
  > temp/positions.json

npx from-xlsx -f temp/gdp.xlsx -s countries_and_territories -n true \
  | node join \
  | npx reduce \
  > data.json
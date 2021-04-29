const $ = require('cheerio')
const fs = require('fs')

const html = fs.readFileSync('cantons.html', 'utf-8')

const tbody = $('.wikitable tbody', html)

let data = []

$('tr', tbody).each((i, tr) => {
  const a = $('td:first a', tr)

  data.push({
    abbrev: $('th:first', tr).text().trim(),
    page: a.attr('href'),
    nom: a.text(),
  })
})

fs.writeFileSync('data.json', JSON.stringify(data), 'utf-8')

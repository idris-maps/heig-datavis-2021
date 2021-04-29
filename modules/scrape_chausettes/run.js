const fs = require('fs')
const get = require('./get')
const parse = require('./parse')

const file = fs.createWriteStream('chausettes.ndjson')

const loop = offset => {
  get(offset)
    .then(res => {
      const { nextOffset, total, data } = parse(res)
      data.forEach(d => file.write(`${JSON.stringify(d)}\n`))
      if (nextOffset < total) {
        loop(nextOffset)
      }
    })
}

loop(0)
const R = require('ramda')

module.exports = data => {
  const products = data[0].data.search.products

  const getProductData = d => {
    const product = R.pipe(
      R.prop('product'),
      R.pick(['productId', 'name', 'nameProperties', 'brandId', 'brandName', 'averageRating'])
    )(d)
    const price = R.path(['offer', 'price', 'amountIncl'], d)
    return { ...product, price }
  }

  return {
    data: products.results.map(getProductData),
    ...R.pick(['nextOffset', 'total'], products)
  }
}

const faker = require('faker')

const products = Array.from(Array(10)).map(() => ({
  product: faker.commerce.product(),
  price: faker.commerce.price(),
}))

let i = 0

while (i < 10000) {
  i = i + 1
  console.log(
    JSON.stringify({
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      dateOfBirth: faker.date.past().toISOString().split('T')[0],
      amount: Math.round(Math.random() * 5) + 1,
      ...products[Math.floor(Math.random() * 10)],
    })
  )
}

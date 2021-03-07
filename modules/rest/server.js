const express = require('express')
const bodyParser = require('body-parser')
const initDb = require('./db')

const PORT = 3000
const users = initDb()

const app = express()
app.use(bodyParser.json())

app.get('/users', (req, res) => res.status(200).json(users.getAll()))
app.get('/users/:id', (req, res) => {
  const user = users.getOne(Number(req.params.id))
  return user
    ? res.status(200).json(user)
    : res.sendStatus(404)
})
app.post('/users', (req, res) => {
  const user = users.create(req.body)
  return res.status(200).json(user)
})
app.patch('/users/:id', (req, res) => {
  const user = users.update(Number(req.params.id), req.body)
  return user
    ? res.status(200).json(user)
    : res.sendStatus(404)
})
app.put('/users/:id', (req, res) => {
  const user = users.replace(Number(req.params.id), req.body)
  return user
    ? res.status(200).json(user)
    : res.sendStatus(404)
})
app.delete('/users/:id', (req, res) => {
  const user = users.remove(Number(req.params.id), req.body)
  return user
    ? res.sendStatus(204)
    : res.sendStatus(404)
})

app.listen(PORT, () => console.log(`Server running on ${PORT}`))
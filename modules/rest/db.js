

module.exports = () => {
  let users = [
    { id: 1, name: 'Alice', city: 'Yverdon' },
    { id: 2, name: 'Bob', city: 'Lausanne' },
  ]

  const getId = () => users.reduce((r, d) => d.id > r ? d.id : r, 0) + 1

  return {
    getAll: () => users,
    create: data => {
      const newUser = { ...data, id: getId() }
      users = [...users, newUser]
      return newUser
    },
    getOne: id => users.find(d => d.id === id),
    update: (id, data) => {
      const exists = users.find(d => d.id === id)
      if (!exists) { return undefined }
      const updatedUser = { ...exists, ...data }
      users = users.map(d => d.id === id ? updatedUser : d)
      return updatedUser
    },
    replace: (id, data) => {
      const exists = users.find(d => d.id === id)
      if (!exists) { return undefined }
      users = users.map(d => d.id === id ? data : d)
      return { ...data, id }
    },
    remove: id => {
      const exists = users.find(d => d.id === id)
      if (!exists) { return undefined }
      users = users.filter(d => d.id !== id)
      return true
    }
  }
}
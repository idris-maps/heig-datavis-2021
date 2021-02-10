import React, { useState } from 'react'

export default () => {
  const [name, setName] = useState('')

  return (
    <div>
      <h2>Utiliser une valeur</h2>
      <input onKeyUp={e => setName(e.target.value)} />
      <p>Salut <span>{name}</span></p>
    </div>
  )
}

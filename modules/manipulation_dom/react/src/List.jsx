import React from 'react'

export default ({ data }) => (
  <div>
    <h2>Itérer</h2>
    <ul>
      {
        data.map(d => <li key={d}>{d}</li>)
      }
    </ul>
  </div>
)

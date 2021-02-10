import React, { useState } from 'react'

export default () => {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h2>Compter les clicks</h2>
      <button onClick={() => setCount(count + 1)}>{count}</button>
    </div>
  ) 
}

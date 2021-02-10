import React from 'react'
import { render } from 'react-dom'
import Counter from './Counter'
import Name from './Name'
import List from './List'

const App = () => (
  <div>
    <h1>Manipulation DOM</h1>
    <Counter />
    <Name />
    <List data={[1, 2, 3, 4, 5]}/>
  </div>
)

render(App(), document.getElementById('app'))

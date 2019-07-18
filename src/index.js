import React from 'react'
import ReactDOM from 'react-dom'
import useCounter from './use-counter'

function App() {
  const {count, increment, decrement} = useCounter({initialCount: 1, step: 2})
  return (
    <div>
      <button onClick={decrement}>-</button>
      {` ${count} `}
      <button onClick={increment}>+</button>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

import './App.css';
import React, { useReducer } from 'react';

const reducer = (state, action) => {
  if (action === 'increment') {
    return state + 1
  } else if (action === 'decrement') {
    return state - 1
  } else if (action === 'reset') {
    return 0
  } else {
    throw new Error();
  }
}


function App() {
const [count, dispatch] = useReducer(
  reducer, 
  0
)

  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={() => dispatch('increment')}>Plus</button>
      <button onClick={() => dispatch('decrement')}>Minus</button>
      <button onClick={() => dispatch('reset')}>Reset</button>
    </div>
  );
}

export default App;

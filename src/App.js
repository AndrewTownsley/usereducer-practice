import './App.css';
import { useReducer, useState } from 'react';
const Slider = ({ onChange, min, max }) => {
  const [value, setValue] = useState(1);

  return (
    <div>
      {value}
      <input 
        type="range" 
        min={min}
        max={max}
        value={value}
        onChange= {(e) => {
          const value = Number(e.target.value)
          onChange(value)
          setValue(value)
        }}
      />
    </div>
  )


}


const reducer = (state, action) => {
  if (action === 'increment') {
    return {
      count: state.count + 1,
      step: state.step,
    }
  } else if (action === 'decrement') {
    return {
      count: state.count - 1,
      step: state.step,
    }
  } else if (action === 'reset') {
    return {
      count: 0,
      step: state.step,
    }
  } else {
    throw new Error();
  }
}


function App() {
const [count, dispatch] = useReducer(
  reducer, 
  { count: 0, step: 1 }
)

  return (
    <div className="App">
      <Slider
        min={1}
        max={10}
        onChange={() => ({})}
      />
      <h1>{count}</h1>
      <button onClick={() => dispatch('increment')}>Plus</button>
      <button onClick={() => dispatch('decrement')}>Minus</button>
      <button onClick={() => dispatch('reset')}>Reset</button>
    </div>
  );
}

export default App;

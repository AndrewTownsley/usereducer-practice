import './App.css';
import { useReducer, useState } from 'react';


const Slider = ({ onChange, min, max}) => {
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
    if (action.type === 'increment') {
      return {
        count: state.count + state.step,
        step: state.step,
      }
    } else if (action.type === 'decrement') {
      return {
        count: state.count - state.step,
        step: state.step,
      }
    } else if (action.type === 'reset') {
      return {
        count: 0,
        step: state.step,
      }
    } else if (action.type === 'updateStep') {
      return {
        count: state.count,
        step: action.step,
      }
    } else {
      throw new Error();
    }
  }

const ReducerApi = () => {
    const [state, dispatch] = useReducer(
        reducer,
        { count: 0, step: 1}
    )


    return (
        <div>
            <Slider
                min={1}
                max={10}
                onChange={(value) => dispatch({
                  type: 'updateStep',
                  step: value
            })}
      />
            <p>Count:{state.count}</p>
            <a href="www.google.com">gogole</a>
            <button onClick={() => dispatch({type: "increment"})}>+</button>
            <button onClick={() => dispatch({type: "increment"})}>-</button>
            <button onClick={() => dispatch({type: "reset"})}>reset</button>
        </div>
    )
}

export default ReducerApi

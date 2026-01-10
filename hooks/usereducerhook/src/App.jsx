import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useReducer } from 'react'
import Child from './Child'

function App() {
  const initialState = {
    count: 0
  }

  let reducer = (state, action) => {
    console.log("state-> ", state);
    console.log("action-> ", action);
    switch (action.type) {
      case "Increment":
        return { count: state.count + 1 };

      case "Decrement":
        return { count: state.count - 1 };

      case "Reset":
        return { count: 0 };

      default:
        return state;
    }
  }

  const [state, dispcher] = useReducer(reducer, initialState);


  return (
    <>
      <button onClick={() => dispcher({ type: "Increment" })}>Increment</button>
      <button onClick={() => dispcher({ type: "Decrement" })}>Decrement</button>
      <button onClick={() => dispcher({ type: "Reset" })}>Reset</button>
      {state.count}
      <Child></Child>
    </>
  )
}

export default App

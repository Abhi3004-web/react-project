import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useMemo } from 'react'

function App() {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState('');
  //const calculation = expensiveCal(count);

  const calculation = useMemo(() => {
    return expensiveCal(count);
  }, [count])

  function expensiveCal(num) {
    console.log("start calculation");
    for (let index = 0; index < 1000000; index++) { }
    return num;
  }
  test1();
  function test1() {
    console.log("hello");
  }
  return (
    <>
      <input type="number" onChange={() => setCount(count + 1)}></input>
      <h1>Calculation : {calculation}</h1>

      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Type something"
      />
      <p>Input Value: {inputValue}</p>
    </>
  )
}

export default App

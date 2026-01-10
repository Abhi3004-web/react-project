import { useState, useMemo } from 'react'
import './App.css'
import Child from './Child';

function App() {
  const [count, setCount] = useState(0);
  const [minus, setMinus] = useState(100);
  let heavyCal = useMemo(() => {
    console.log("heavy calculation");
    let result = 0;
    for (let i = 0; i < 1000000; i++) {
      result += i;
    }
    return result + count;
  }, [count])
  return (
    <>
      <p>heavy calculation : {heavyCal}</p>
      <button onClick={() => setCount(count + 1)}>Addition</button> : {count}
      <button onClick={() => setMinus(minus - 1)}>Minus</button> : {minus}
      <Child data={heavyCal}></Child>
    </>
  )
}

export default App

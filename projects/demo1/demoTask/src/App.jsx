import { React, useState, useMemo } from 'react'
import Classbasedstate from "./Classbasedstate"

import './App.css'

function App() {
  let [count, setCount] = useState(0);
  let [min, setMin] = useState(100);
  let [data, setData] = useState({
    name: "Abhi",
    age: 34
  })

  let additionData = useMemo(function addition() {
    console.log(".................");
    return count * 2;
  }, []);

  function callData() {
    const newdata = { name: "Ravi", city: "Noida" };
    setData(...data, newdata);
  }


  return (
    <>
      {additionData}
      <button onClick={() => setCount(count + 1)}>add</button>
      {count}<br></br>
      <button onClick={() => setMin(min - 1)}>minus</button>
      {min}
      {/* <Classbasedstate></Classbasedstate> */}
      {(data.city) ? <h1>{data.city} and {data.name} and {data.age}</h1> : <h1>{data.name} and {data.age}</h1>}

      <button onClick={() => callData()}>click me</button>
    </>
  )
}

export default App

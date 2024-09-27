import { useState } from 'react'
import './App.css'
import ChildData from './ChildData'
import { createContext } from 'react';

export let data = createContext();
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <data.Provider value={count}>
        <ChildData></ChildData>
        <button onClick={() => setCount(count + 1)}>Click me</button>
      </data.Provider>
    </>
  )
}

export default App

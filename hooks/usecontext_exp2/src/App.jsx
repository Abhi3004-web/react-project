import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createContext } from 'react'
export let data = createContext();
function App() {

  const [count, setCount] = useState(0);
  const [countArr, setCountArr] = useState([]);
  const handleClickMe = () => {

    setCount((count) => count + 1);
    countArr.push(count);
  }
  return (
    <>
      <data.Provider>
        <p>Count : {count}</p>
        <p>Arr : {countArr}</p>
        <button onClick={handleClickMe}>click me</button>
      </data.Provider>
    </>
  )
}

export default App

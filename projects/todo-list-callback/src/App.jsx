import { useState } from 'react'
import './App.css'
import ChildA from './ChildA'

function App() {
  const [count, setCount] = useState(0)
  


  return (
    <>
      Count value is : {count}
      <input type="button" onClick={() => setCount(count + 1)} value="Add" />
      <ChildA></ChildA>
    </>
  )
}

export default App

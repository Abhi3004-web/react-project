import { useState } from 'react'
import './App.css'
import ItextInput from './input_item/ItextInput'

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("")

  return (
    <>
      <p> count is : {count}</p>
      <button onClick={() => setCount(count + 1)}>increment</button>
      <br />
      <ItextInput placeholder='Enter name ...' backgroundColor='red' padding="5px" value={name} onChange={(e) => setName(e.target.value)}></ItextInput>
      <ItextInput label='Address' placeholder='Enter address...' backgroundColor='green' padding="5px"></ItextInput>
    </>
  )
}

export default App

import { useState } from 'react'

import './App.css'
import Child from './child'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Child />
    </>
  )
}

export default App

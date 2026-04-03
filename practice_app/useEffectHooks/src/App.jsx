import { useState } from 'react'

import './App.css'
import Child from './Child';

function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(0);
  const [check, setCheck] = useState(true);

  return (
    <>
      <h1>Parent Component</h1>
      <button onClick={() => setCount(count + 1)}>Count {count}</button>
      <button onClick={() => setData(data + 1)}>Data {data}</button>
      <button onClick={() => setCheck(!check)}>toggle</button>
      {check && <Child count={count} data={data} />}
    </>
  )
}

export default App

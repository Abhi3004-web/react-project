import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TableData from './TableData'

function App() {
  const [count, setCount] = useState(0);
  const [countFive, setcountFive] = useState(0);

  useEffect(() => {

    console.log(`Component rendered or ${count} updated`);

    // return (() => {
    //   console.log(`old timer ${count} distroied`);
    // });
  });

  return (
    <>
      <h1>Count : {count}</h1>
      <button onClick={() => setCount(count + 1)}>click me</button>
      <button onClick={() => setcountFive(count + 5)}>click Five</button>
      <TableData></TableData>
    </>
  )
}

export default App

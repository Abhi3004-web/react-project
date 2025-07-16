import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TableData from './TableData'

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let interval = setInterval(() => {
      console.log(`Component rendered or ${count} updated`);
      setCount(count + 1);
    }, 1000);

    return (() => {
      console.log("component will unmount 1");
      clearInterval(interval);
      console.log(`old timer ${count} distroied`);
    });
  }, [count]);

  useEffect(() => {
    console.log('1')
    return () => {
      console.log('2')
    }
  }, [])
  useEffect(() => {
    console.log('3')
    return () => {
      console.log('4')
    }
  })
  useEffect(() => {
    console.log('5')
    return () => {
      console.log('6')
    }
  }, [count]
  )

  return (
    <>
      <h1>Count : {count}</h1>

      <button onClick={() => setCount(count + 1)}>click me</button>
      {/* <button onClick={() => setcountFive(count + 5)}>click Five</button> */}
      <TableData></TableData>
    </>
  )
}

export default App

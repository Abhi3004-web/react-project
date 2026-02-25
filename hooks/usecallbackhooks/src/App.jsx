import { useCallback, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Child from './Child'

function App() {
  const [count, setCount] = useState(0)
  const factorial = useCallback(() => {

    let a = 1;
    for (let i = 1; i <= 5; i++) {
      a *= i;
    }
    console.log(`factorial of ${5} is = ${a}`);
  }, [])

  return (
    <>
      <button onClick={() => setCount(count + 1)}>click me</button> {count}
      {/* <Child handleCheck={factorial}></Child> */}
      <Child data={5} handleCheck={factorial}></Child>
    </>
  )
}

export default App

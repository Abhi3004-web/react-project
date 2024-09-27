

import { useEffect, useLayoutEffect, useState } from 'react'
import UseMemoData from './UseMemoData';
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setCount(count + 2);
  //   }, 1000)

  //   return (() => {
  //     clearInterval(timer);
  //   })

  // }, [count])
  // useLayoutEffect(() => {
  //   console.log("data use Layouteffects");

  // })
  // useEffect(() => {
  //   console.log("data use effects");

  // })



  return (
    <>
      <h1>Hello Use effect : {count}</h1>
      <UseMemoData></UseMemoData>
    </>
  )
}

export default App

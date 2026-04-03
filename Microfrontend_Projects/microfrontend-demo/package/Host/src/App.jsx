import React, { useState } from 'react'
import './App.css'
import { Suspense } from 'react'
import { useSharedState } from 'remoteApp/MyProvider'
const Button = React.lazy(() => import('remoteApp/Button'))

function App() {
  //const [count, setCount] = useState(0);
  const { count, increment } = useSharedState()

  return (
    <>
      <section id="center">
        <button onClick={increment}>count : {count}</button>
      </section>


      <Suspense fallback={<h1>Loading....</h1>}>
        <Button />
      </Suspense>
    </>
  )
}

export default App

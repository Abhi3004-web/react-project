import React from 'react'
import './App.css'
import Debouncing from './Debouncing'
import Throttling from './Throttling'

function App() {


  return (
    <>
      <h1>debouncing effect will show</h1>
      <Debouncing></Debouncing>
      <Throttling></Throttling>
    </>
  )
}

export default App

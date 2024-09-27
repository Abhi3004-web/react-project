import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ButtonsContainer from './ButtonsContainer'

function App() {
  let calculatorValue = ['C', '1', '2', '+', '3', '4', '-', '5', '6', '*', '7', '8', '/', '=', '9', '0', '.']
  return <div className='main-div'>
    <input type='text' className='input-box'></input>
    <ButtonsContainer buttons={calculatorValue}></ButtonsContainer>
  </div>
}

export default App

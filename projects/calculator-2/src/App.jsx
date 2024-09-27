import { useState } from 'react'
import './App.css'
import Component from './Component'
import InputNumber from './InputNumber'
import InputButton from './InputButton'

function App() {
  const buttonArr = ['C', '1', '2', '+', '3', '4', '-', '5', '6', '*', '7', '8', '/', '=', '9', '0', '.']
  const [initialVal, setInitialVal] = useState("");
  const buttonClick = (buttonNum) => {
    if (buttonNum === 'C') {
      setInitialVal("");
    } else if (buttonNum === '=') {
      const tempVal = eval(initialVal);
      setInitialVal(tempVal);
    } else {
      const displayVal = initialVal + buttonNum;
      setInitialVal(displayVal);
    }
  }
  return <>
    <Component>
      <InputNumber displayValue={initialVal}></InputNumber>
      <InputButton inputBtn={buttonArr} onbuttonclick={buttonClick}></InputButton>
    </Component>
  </>
}

export default App

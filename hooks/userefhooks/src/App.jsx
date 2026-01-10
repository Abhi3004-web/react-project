import { useState } from 'react'

import './App.css'
import { useRef } from 'react';
import { useEffect } from 'react';

function App() {
  const [name, setName] = useState("");
  const [count, setCount] = useState(0);
  const [check, setCheck] = useState(false);
  const countValue = useRef(0);
  const inputValue = useRef();
  const previousState = useRef();

  const increment = () => {
    console.log(countValue.current += 1);
  }
  const onValueChange = (e) => {
    setName(e.target.value);
  }

  const handleReset = () => {
    inputValue.current.focus();
  }

  useEffect(() => {
    previousState.current = count;
  }, [count])

  const timer = useRef(null);
  const startTimer = () => {
    timer.current = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);
  }
  const stopTimer = () => {
    clearInterval(timer.current);
    timer.current = null;
    setCheck(true);
  }

  const resumeTimer = () => {
    setCheck(false);
    startTimer();
  }



  return (
    <>
      {/* // avoding re-render */}
      <p>count : {countValue.current}</p>
      <button onClick={increment}>increment</button>

      {/* // Accessing Dom element */}
      <input type='text' value={name} ref={inputValue} onChange={onValueChange}></input>
      <button onClick={handleReset}>reset</button>
      <p>{name}</p>

      {/* prevoius state hold */}
      <p>current State : {count}</p>
      <p>previous State : {previousState.current}</p>
      <button onClick={() => setCount(count + 1)}>click</button>

      {/* Storing setTimeout and setInterval reference */}

      <p>timer : {count}</p>
      {!check ? <button onClick={startTimer}>Start</button> : <button onClick={resumeTimer}>resume</button>}
      <button onClick={stopTimer}>Stop</button>

    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(0);
  const [inputVal, setInputVal] = useState("");
  const [details, setDetails] = useState({
    name: '',
    age: 0,
    city: '',
    gender: ''
  })

  const incrementNum = () => {
    setNum(num + 1);
  }

  const showDetails = () => {
    setDetails((prev) => ({
      ...prev,
      age: prev.age + 5,
      name: "Abhijit",
      city: "Delhi",
      gender: "Male"
    }))
  }

  return (
    <>
      <input value={inputVal} onChange={(e) => setInputVal(e.target.value)}></input>
      <p>you are typing-- {inputVal}</p>
      <h1>Counter : {count}</h1>
      <button onClick={() => setCount(count + 1)}>click me</button>

      <h1> Number : {num}</h1>
      <button onClick={incrementNum}>Increment</button>

      {(details.name === "") ? <h1>Information is empty</h1> : <h1> my name is {details.name}, age is {details.age}, city {details.city} and I am {details.gender}</h1>}
      <button onClick={showDetails}>show Details</button>
    </>
  )
}

export default App

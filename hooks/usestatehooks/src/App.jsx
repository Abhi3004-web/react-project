import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(0);
  const [inputVal, setInputVal] = useState("");
  const [details, setDetails] = useState({
    name: 'Anshu',
    age: 0,
    gender: 'M',
    address: { city: 'Darbhanga', info: { distric: 'Darbhanga', state: 'Bihar', pincode: 846001 } }
  })
  const [value, setValue] = useState([0]);

  const incrementNum = () => {
    setNum(num + 1);
  }

  const showDetails = () => {
    setDetails((prev) => ({
      ...prev,
      age: prev.age + 5,
      name: "Abhijit",
      gender: "Male",
      address:
      {
        ...prev.address, city: "Muzafferpur",
        info:
          { ...prev.address.info, state: "Delhi" }
      }
    }))
  }

  const pushData = () => {
    setValue((oldVal) => [...oldVal, oldVal[oldVal.length - 1] + 2]);
  }

  return (
    <>
      <input value={inputVal} onChange={(e) => setInputVal(e.target.value)}></input>
      <p>you are typing-- {inputVal}</p>

      <h1>Counter : {count}</h1>
      <button onClick={() => setCount(count + 1)}>click me</button>

      <h1> Number : {num}</h1>
      <button onClick={incrementNum}>Increment</button>
      <button onClick={() => { setNum((prev) => prev + 1), setNum((prev) => prev + 1) }}>get Data</button>

      {(details.name === "") ?
        <h1>Information is empty</h1> :
        <h1> my name is {details.name}, age is {details.age}, city {details.address.city}, state is {details.address.info.state} and I am {details.gender}</h1>}
      <button onClick={showDetails}>show Details</button>

      <p>Array Data : {value.join(", ")}</p>
      <button onClick={pushData}> Push Data</button>


    </>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import First from './component/First';
import Second from './component/Second';
import Third from './component/Third';
import Forth from './component/Forth';
import Child from './component/Child';
import Clock from './component/Clock';

function App() {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState(0);
  const [color, setColor] = useState("black");
  const updatecount = () => {
    setCount((count) => count + 1);
    setCount((count) => count + 1);
    setCount((count) => count + 1);
  }

  return (
    <>
      <p>Count : {count}</p>
      <button onClick={updatecount}>Click me</button>
      {
        count === 0 ? <h1>condition 1</h1>
          : count === 1 ? <h1>condition 2</h1>
            : count === 2 ? <h1>condition 3</h1>
              : <h1>Default value</h1>
      }
      <button onClick={() => setValue(value + 1)}>Show value</button>
      {
        value === 0 ? <First />
          : value === 1 ? <Second />
            : value === 2 ? <Third />
              : <Forth />
      }
      <Child color="blue">
        <h1>Child JSX will pass in component.</h1>
      </Child>
      <select onChange={(e) => setColor(e.target.value)} defaultValue={"black"}>
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="black">Black</option>
        <option value="blue">Blue</option>
      </select>
      <Clock color={color} />
    </>
  )
}

export default App

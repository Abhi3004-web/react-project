import { useState } from 'react'

import ObjectUpdate from './ObjectUpdate'
import ArrayUpdate from './ArrayUpdate';

function App() {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);

  const handleClick = () => {
    setList(prev => [...prev, input]);
    setInput("");
  }
  const userLength = list.length;
  const uniqueUserLength = [... new Set(list)].length;
  const lastUserName = list[list.length - 1];

  return (
    <>
      <h1>Derived state example</h1>
      <h3>Total user : {userLength}</h3>
      <h3>Total unique user : {uniqueUserLength}</h3>
      <h3>last UserName : {lastUserName}</h3>
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={handleClick}>add</button>
      <ul>
        {
          list.map((item, index) => <li key={index}>{item}</li>)
        }
      </ul>
      <hr />
      <ObjectUpdate />
      <hr />
      <ArrayUpdate />
    </>
  )
}

export default App

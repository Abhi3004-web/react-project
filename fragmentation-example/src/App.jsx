import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let itemArr = ['A', 'B', 'C', 'D', 'E'];

  return <>
    <ul className="list-group">
      {itemArr.map((index) => (
        <li key={index} className="list-group-item">{index}</li>
      )
      )}

    </ul>
  </>
}

export default App

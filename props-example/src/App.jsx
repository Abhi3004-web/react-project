import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ListIteams from './ListItems'
import ErrorMessage from './ErrorMessage'

function App() {
  //let itemArr = [];
  let itemArr = [1,2,3,'A', 'B', 'C', 'D', 'E'];

  return <>
    <h1>List Iteams</h1>
    <ErrorMessage items={itemArr}></ErrorMessage>
    <ListIteams items={itemArr}></ListIteams>
  </>
}

export default App

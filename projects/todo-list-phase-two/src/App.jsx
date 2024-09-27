import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoHeading from './TodoHeading'
import TodoItems from './TodoItems'
import AddedItems from './AddedItems'

function App() {
  let todoItemsData = [
    {
      itemName: "purchage Milk",
      purchageDate: "24/04/2024"
    },
    {
      itemName: "Going to college",
      purchageDate: "25/04/2024"
    },
    {
      itemName: "subscribe channel",
      purchageDate: "right now"
    },
    {
      itemName: "testing data",
      purchageDate: "29/04/2024"
    }];

  return <div className='container-todo'>
    <TodoHeading></TodoHeading>
    <TodoItems></TodoItems>
    <AddedItems TodoItems={todoItemsData}></AddedItems>
  </div>
}

export default App

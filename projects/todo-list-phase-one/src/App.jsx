import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoHeading from './TodoHeading'
import TodoItems from './TodoItems'
import AddedTodoItems1 from './AddedTodoItems1'
import AddedTodoItems2 from './AddedTodoItems2'
import CurrentDate from './CurrentDate'

function App() {
  return <div>
    <TodoHeading></TodoHeading>
    <TodoItems></TodoItems>
    <AddedTodoItems1></AddedTodoItems1>
    <AddedTodoItems2></AddedTodoItems2>
    <CurrentDate></CurrentDate>
  </div>
}

export default App

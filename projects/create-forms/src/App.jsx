import { useState } from 'react'
import './App.css'
import InputTodoItem from './InputTodoItem'
import TodoListItem from './TodoListItem'
import AdmissionForm from './AdmissionForm'
import RefData from './RefData'

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const onAddClick = (addNewItem, addDueDate) => {

    const newTodoItems = [...todoItems, {
      itemName: addNewItem,
      purchageDate: addDueDate
    }];
    setTodoItems(newTodoItems);
  }

  const onDeleteClick = (item) => {
    const newTodoItems = todoItems.filter((element) => element.itemName !== item);
    setTodoItems(newTodoItems);
  }
  return <div>
    <h1>Todo List with form element</h1>
    <InputTodoItem addItem={onAddClick}></InputTodoItem>
    <TodoListItem todoListItem={todoItems} deleteItem={onDeleteClick}></TodoListItem>
    <AdmissionForm></AdmissionForm>
    <RefData></RefData>
  </div>
}

export default App

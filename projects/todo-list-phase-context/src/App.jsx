import { useState } from 'react'
import './App.css'
import TodoHeading from './TodoHeading'
import InputItem from './InputItem'
import Message from './Message'
import AddedItem from './AddedItem'
import { TodoItemsData } from './store/todo-items-store'

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const addNewItem = (addNewItem, addDueDate) => {

    const newTodoItems = [...todoItems, {
      itemName: addNewItem,
      purchageDate: addDueDate
    }];
    setTodoItems(newTodoItems);
  }

  // const defaultItems = [{
  //   itemName: 'Ghee',
  //   purchageDate: 'Today'
  // }];

  const deleteItem = (item) => {
    const newTodoItems = todoItems.filter((element) => element.itemName !== item);
    setTodoItems(newTodoItems);
  }

  return (
    <TodoItemsData.Provider value={{ todoItems: todoItems, addNewItem: addNewItem, deleteItem: deleteItem }}>
      <div className='main-container'>
        <TodoHeading></TodoHeading>
        <InputItem></InputItem>
        <Message></Message>
        <AddedItem></AddedItem>
      </div>
    </TodoItemsData.Provider>
  )
}

export default App

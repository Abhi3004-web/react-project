import { useState } from 'react'
import './App.css'
import InputItem from './InputItem'
import TodoHeading from './TodoHeading'
import AddedItem from './AddedItem'
import Message from './Message'


function App() {
  const [todoItems, setTodoItems] = useState([]);

  const onAddClick = (addNewItem, addDueDate) => {

    const newTodoItems = [...todoItems, {
      itemName: addNewItem,
      purchageDate: addDueDate
    }];
    setTodoItems(newTodoItems);
  }

  const onDeleteItem = (item) => {
    const newTodoItems = todoItems.filter((element) => element.itemName !== item);
    setTodoItems(newTodoItems);
  }
  return <div className='main-container'>
    <TodoHeading></TodoHeading>
    <InputItem addItem={onAddClick}></InputItem>
    <Message addedItems={todoItems}></Message>
    <AddedItem addedItems={todoItems} onDeleteItem={onDeleteItem}></AddedItem>

  </div>
}

export default App

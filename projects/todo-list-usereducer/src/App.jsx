import { useReducer } from 'react'
import './App.css'
import InputItem from './InputItem'
import TodoHeading from './TodoHeading'
import AddedItem from './AddedItem'
import Message from './Message'

const todoItemReducer = (currentTodoItem, action) => {
  let newTodoItems = currentTodoItem;
  if (action.type === "NEW_ITEM") {
    newTodoItems = [...currentTodoItem, {
      itemName: action.payload.addNewItem,
      purchageDate: action.payload.addDueDate
    }];

  } else if (action.type === "DELETE_ITEM") {
    newTodoItems = currentTodoItem.filter((element) => element.itemName !== action.payload.itemName);
  }
  return newTodoItems;
}
function App() {

  const [todoItems, dispacher] = useReducer(todoItemReducer, []);

  const onAddClick = (addNewItem, addDueDate) => {
    const newItemAction = {
      type: "NEW_ITEM",
      payload: {
        addNewItem,
        addDueDate
      }
    }
    dispacher(newItemAction);
  }

  const onDeleteItem = (item) => {
    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: {
        itemName: item
      }
    }
    dispacher(deleteItemAction);
  }
  return <div className='main-container'>
    <TodoHeading></TodoHeading>
    <InputItem addItem={onAddClick}></InputItem>
    <Message addedItems={todoItems}></Message>
    <AddedItem addedItems={todoItems} onDeleteItem={onDeleteItem}></AddedItem>

  </div>
}

export default App


import { useState } from 'react'
import './App.css'
import InputItem from './InputItem'
import TodoHeading from './TodoHeading'
import AddedItem from './AddedItem'
import Message from './Message'
import PreviousVal from './PreviousVal'


function App() {
  const [todoItems, setTodoItems] = useState([]);
  const [val, setVal] = useState(0);

  const onAddClick = (addNewItem, addDueDate) => {
    console.log(`item ${addNewItem}`);
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
    <PreviousVal val={val}></PreviousVal>
    <button onClick={() => setVal(val + 1)}>Increment Value</button>

  </div>
}

export default App


///////////////////////////////////////////////////////////////////
//=========increment and decrement count based Program===========//
//////////////////////////////////////////////////////////////////

// import { useState } from 'react'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0);

//   const increment = (count) => {
//     setCount(count + 1);
//   }

//   const decrement = (count) => {
//     setCount(count - 1);
//   }
//   return (
//     <>

//       <div className="card">
//         count is {count}
//         <button onClick={() => increment(count)}>
//           increment
//         </button>
//         <button onClick={() => decrement(count)}>
//           decrement
//         </button>
//       </div>

//     </>
//   )
// }

// export default App

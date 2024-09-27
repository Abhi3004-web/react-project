import './App.css'
import InputItem from './InputItem'
import TodoHeading from './TodoHeading'
import AddedItem from './AddedItem'
import Message from './Message'
import TodoItemContextProvider from './store/todo-items-store'



function App() {


  return <TodoItemContextProvider>
    <div className='main-container'>

      <InputItem></InputItem>
      <Message></Message>
      <AddedItem></AddedItem>

    </div>
  </TodoItemContextProvider>
}

export default App

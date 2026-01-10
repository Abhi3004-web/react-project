import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddUser from './AddUser'
import DisplayUser from './DisplayUser'

function App() {
  const [user, setUser] = useState("")

  return (
    <>
      <AddUser setUser={setUser}></AddUser>
      <DisplayUser user={user}></DisplayUser>
    </>
  )
}

export default App

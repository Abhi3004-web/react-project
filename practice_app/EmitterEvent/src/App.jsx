import { useState } from 'react'
import Sender from "./Event/SenderComponent"
import Receiver from "./Event/ReceiverComponent"
import './App.css'

function App() {


  return (
    <>
      <Receiver />
      <Sender />
    </>
  )
}

export default App

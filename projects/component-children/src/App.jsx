import { useState } from 'react'
import './App.css'
import Container from "./Container"
import ItemsHeading from './ItemsHeading'
import ErrorMessage from './ErrorMessage'
import ItemsList from './ItemsList'



function App() {
  let foodItems = ["sabjee", "milk", "aalu", "pyaaj", "apple"];
  //let foodItems = [];
  return <>
    <Container>
      <ItemsHeading></ItemsHeading>
      <ErrorMessage items={foodItems}></ErrorMessage>
      <ItemsList items={foodItems}></ItemsList>
    </Container>
    <Container>
      <p>This is temp info</p>
    </Container>
  </>
}

export default App

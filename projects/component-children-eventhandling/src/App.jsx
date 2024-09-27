import { useState } from 'react'
import './App.css'
import Container from "./Container"
import ItemsHeading from './ItemsHeading'
import ErrorMessage from './ErrorMessage'
import ItemsList from './ItemsList'
import InputItem from './InputItem'



function App() {
  //let foodItems = ["sabjee", "milk", "aalu", "pyaaj", "apple"];
  //let foodItems = [];
  let [foodItems, setFoodItems] = useState([]);
  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      let newFoodItem = event.target.value;
      event.target.value = "";
      let tempArr = [...foodItems, newFoodItem];
      setFoodItems(tempArr);
    }
  }
  return <>
    <Container>
      <ItemsHeading></ItemsHeading>
      <InputItem handleKeyDown={onKeyDown}></InputItem>
      <ErrorMessage items={foodItems}></ErrorMessage>
      <ItemsList items={foodItems}></ItemsList>
    </Container>
    <Container>
      <p>This is temp info</p>
    </Container>
  </>
}

export default App

import './App.css'
import Child1 from './Child1'
import InputType from './InputType'

function App() {
  return (
    <>
      <InputType label="UserName" type="text" />
      <InputType label="Age" type="number" />
      <InputType label="Address" type="text" />
      <Child1 />
    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Registrstion from './Registrstion'
import FormikaRegistrationForm from './FormikaRegistrationForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div> Form Validation </div>
      {/* <Registrstion></Registrstion> */}
      <FormikaRegistrationForm></FormikaRegistrationForm>
    </>
  )
}

export default App

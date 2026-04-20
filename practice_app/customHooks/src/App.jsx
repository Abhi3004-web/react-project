import './App.css'
import useToggle from './Toggle'
import Home from './Home'
import About from './About'
import { Link, Route, Routes } from 'react-router'

function App() {
  const [data, ToggleData] = useToggle(true)

  return (
    <>
      <button onClick={ToggleData}>Toggle</button>
      <button onClick={() => ToggleData(true)} disabled={!data}>Hide</button>
      <button onClick={() => ToggleData(false)} disabled={data}>Show</button>
      {data ? <h1>Toggle text information.</h1> : null}
      <br />
      <Link to="/">Home</Link>
      <Link to="/about" >About</Link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <hr />
      <h1>Fetch Data from Dummay URL using custom hooks: </h1>

    </>
  )
}

export default App

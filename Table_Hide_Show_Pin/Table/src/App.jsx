import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import Calender from './Calender'


function App() {
  return (
    <div>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/calender' element={<Calender />}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App

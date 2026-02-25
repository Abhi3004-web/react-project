import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { AuthContext } from './AuthContext'
import Login  from './Login'
import Dashboard  from './Dashboard'
function App() {
  return (
    <BrowserRouter>
      <AuthContext>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </AuthContext>
    </BrowserRouter>
  )
}

export default App

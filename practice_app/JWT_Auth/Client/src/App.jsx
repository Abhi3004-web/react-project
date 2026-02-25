import { BrowserRouter, Routes, Route } from "react-router-dom"
import { AuthContext } from "./AuthContext"
import Login from "./Login"
import Dashboard from "./Dashboard"
import ProtectedRoute from "./ProtectedRoute"
function App() {
  return (
    <BrowserRouter>
      <AuthContext>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/dashboard" element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } />
        </Routes>
      </AuthContext>
    </BrowserRouter>
  )
}

export default App

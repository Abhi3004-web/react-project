import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { configureStore } from '@reduxjs/toolkit'
import UserReducers from './UserReducers.jsx'

const store = configureStore({
  reducer: {
    users: UserReducers
  }
})

createRoot(document.getElementById('root')).render(

  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)

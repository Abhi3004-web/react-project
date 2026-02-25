import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Import your components
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Header from './Header';
import Footer from './Footer';

function App() {

  return (
    <>

      <Router>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer></Footer>
      </Router>
    </>
  )
}
export default App

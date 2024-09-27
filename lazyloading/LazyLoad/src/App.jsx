import { Suspense, lazy } from 'react'
// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css'

// Lazy loaded components
const Home = lazy(() => import('./Home'));
const About = lazy(() => import('./About'));

function App() {

  return (



    <Suspense fallback={<div>Loading...</div>}>
      {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes> */}
      <Home></Home>
      <About></About>
    </Suspense>

  )
}

export default App

import { Routes, Route } from 'react-router'
import './App.css'
import Home from './Home'
import About from './About'
import ContactUs from './ContactUs'
import College from './College'
import Header from './Header'
import PageNotFound from './PageNotFound'
function BasicRouting() {
    return <>
        <Header />
        <Routes>
            <Route index element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='contactus' element={<ContactUs />} />
            <Route path='college' element={<College />} />
            <Route path='*' element={<PageNotFound />} />
        </Routes>
    </>
}
export default BasicRouting;

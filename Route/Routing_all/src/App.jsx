import { Link, Navigate, Route, Routes } from 'react-router'
import './App.css'
import BasicRouting from './BasicRouting'
import NestedRouting, { CollegeDepartments, CollegeLayout, CollegeOverview, CollegeStudents } from './NestedRouting'
import Home from './Home'
import About from './About'
import ContactUs from './ContactUs'
import PageNotFound from './PageNotFound'
function App() {
  return (
    <>

      <Link to="/basicrouting">BasicRouting</Link>
      <Link to="/nestedrouting">Nested Routing</Link>
      <Link to="layoutindexrouting">Layout and Index Routing</Link>
      <div> <h1>Basic Routing concept</h1>
        <Routes>
          <Route path="/" element={<Navigate to="/basicrouting" replace />} />
          <Route path="/basicrouting/*" element={<BasicRouting />} />

          <Route path="/nestedrouting" element={<NestedRouting />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contactus" element={<ContactUs />} />
            <Route path="college" element={<CollegeLayout />}>
              <Route index element={<CollegeOverview />} />
              <Route path="students" element={<CollegeStudents />} />
              <Route path="departments" element={<CollegeDepartments />} />
            </Route>
            <Route path="*" element={<PageNotFound />} />
          </Route>
          <Route path="/layoutindexrouting" element={<BasicRouting />} />
        </Routes>
      </div>
      {/* <BasicRouting /> */}
    </>
  )
}

export default App

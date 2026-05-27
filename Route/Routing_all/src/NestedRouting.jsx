import { Link, Outlet } from 'react-router'
import './App.css'

function NestedRouting() {
    return <>
        <h2>Nested Routing concept</h2>

        <div className="navbar">
            <Link to="/nestedrouting">Home</Link>
            <Link to="/nestedrouting/about">About</Link>
            <Link to="/nestedrouting/contactus">Contact Us</Link>
            <Link to="/nestedrouting/college">College</Link>
            <Link to="/nestedrouting/data">Data</Link>
        </div>

        <Outlet />
    </>
}

function CollegeLayout() {
    return <>
        <h3>College Page</h3>

        <div className="navbar nested-navbar">
            <Link to="">Overview</Link>
            <Link to="students">Students</Link>
            <Link to="departments">Departments</Link>
        </div>

        <Outlet />
    </>
}

function CollegeOverview() {
    return <h4>College Overview Page</h4>
}

function CollegeStudents() {
    return <h4>College Students Page</h4>
}

function CollegeDepartments() {
    return <h4>College Departments Page</h4>
}

export default NestedRouting;
export { CollegeLayout, CollegeOverview, CollegeStudents, CollegeDepartments };

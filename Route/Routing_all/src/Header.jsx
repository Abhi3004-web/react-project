import { Link } from "react-router";

function Header() {
    return <>
        <div className="navbar">
            <Link to="/basicrouting/">Home</Link>
            <Link to="/basicrouting/about">About</Link>
            <Link to="/basicrouting/contactus">Contact Us</Link>
            <Link to="/basicrouting/college">College</Link>
            <Link to="/basicrouting/data">Data</Link>
        </div>
    </>
}
export default Header;

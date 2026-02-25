import Cart from "./Cart.jsx";
import { Link } from "react-router-dom";

function Header() {
    return (
        <>
            <header className="header">
                <div className="logo">ShopCart</div>

                <nav className="nav">
                    <Link to="/">Home</Link>
                    <Link to="/product">Products</Link>
                </nav>

                <Cart />
            </header>
        </>
    )
}
export default Header;
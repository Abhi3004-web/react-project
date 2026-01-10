import Cart from "./Cart";

function Header() {
    return (
        <>
            <header className="header">
                <div className="logo">ShopCart</div>

                <nav className="nav">
                    <a href="#">Home</a>
                    <a href="#">Products</a>
                    <a href="#">About</a>
                    <a href="#">Contact</a>
                </nav>

                <Cart />
            </header>
        </>
    )
}
export default Header;
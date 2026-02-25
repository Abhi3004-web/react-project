import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Cart() {
    const cartSelector = useSelector((state) => state.cart.items);
    console.log(cartSelector.length);
    return (
        <>
            <Link to="/cartItem">
                <div className="cart">
                    🛒
                    <span className="cart-count">{cartSelector ? cartSelector.length : 0}</span>
                </div>
            </Link>
        </>
    )
}
export default Cart;
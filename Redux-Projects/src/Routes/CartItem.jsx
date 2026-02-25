import { useDispatch, useSelector } from "react-redux";
import { clearAllItem, removeItem } from "../Redux/slice";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
function CartItem() {

    const dispatch = useDispatch();
    const cartSelector = useSelector((state) => state.cart.items);
    console.log(cartSelector.length);
    const [cartItem, setCartItem] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        setCartItem(
            cartSelector.map(item => ({
                ...item,
                quantity: item.quantity ?? 1
            }))
        );
    }, [cartSelector]);
    const manageQty = (id, qty, stock) => {
        const quantity = parseInt(qty) ? parseInt(qty) : 1;
        if (quantity < 1) quantity = 1;
        if (quantity > stock) quantity = stock;
        const tempItem = cartItem.map((item) => item.id === id ? { ...item, quantity } : item);
        console.log(tempItem);
        setCartItem(tempItem);
    }
    const total = cartItem.reduce((sum, item) => item.quantity ? sum + item.price * item.quantity : sum + item.price, 0);

    const orderPlace = () => {
        localStorage.clear();
        alert("order Placed");
        dispatch(clearAllItem());
        navigate("/");
    }
    return (
        <>
            <div className="cart-container">
                <div className="cart-header">
                    <h2>Total Cart Item :</h2>
                    <span className="item-count"> {cartItem.length}</span>
                </div>
                {cartItem.length > 0 ?
                    (cartItem.map((item) =>
                        <div key={item.id} className="cart-item">
                            <img src={item.thumbnail} alt={item.title} />
                            <div className="item-info">
                                <h4>{item.title}</h4>
                                <p>{item.brand}</p>
                            </div>
                            <div className="item-right">
                                <span className="cart-price">${item.quantity ? (item.price * item.quantity).toFixed(2) : item.price}</span>
                                <input className="count-item" type="number" value={item.quantity ? item.quantity : 1} onChange={(e) => manageQty(item.id, e.target.value, item.stock)} />
                                <button className="remove-btn" onClick={() => dispatch(removeItem(item))}>Remove</button>
                            </div>
                        </div>))
                    : (<h1 className="no-item">Item is not added</h1>)
                }
                {cartItem.length > 0 && <div className="cart-total">
                    <span>Total:</span>
                    <strong>{total.toFixed(2)}</strong>
                </div>}
            </div >
            {cartItem.length > 0 && <div className="cart-container">
                <button className="add-btn" onClick={orderPlace}>Place Order</button>
            </div>}
        </>
    )
}
export default CartItem;
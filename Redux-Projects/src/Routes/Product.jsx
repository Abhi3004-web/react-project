import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../Redux/slice";
import { useEffect } from "react";
import { fetchProduct } from "../Redux/productSlice"

function Product() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProduct());
    }, [])
    const data = useSelector((state) => state.product.items);
    const cartSelector = useSelector((state) => state.cart.items);
    console.log(cartSelector);
    return (
        <>
            <section className="products">
                {data.length && data.map((item) => (
                    <div key={item.id} className="product-card">
                        <span className="ml-badge">{item.weight}</span>
                        <div className="image-wrapper">
                            <img src={item.thumbnail} alt={item.title} className="small-img" />
                            <div className="big-img-box">
                                <img src={item.images[0]} alt="Big Preview" />
                            </div>
                        </div>
                        <h3>{item.title}</h3>
                        <p>{item.brand}</p>
                        <div className="rating">
                            ⭐ <span className="rate">{Math.max(...item.reviews.map(val => val.rating))}</span>
                            <span className="reviews">| {item.reviews.length} reviews</span>
                        </div>
                        <div className="price-row">
                            <span className="price">${item.price}</span>
                            <span className="discount">({item.discountPercentage}% OFF)</span>
                        </div>
                        <div className="btn-row">
                            {cartSelector.find((cartItem) => cartItem.id === item.id) ?
                                (<button className="remove-btn" onClick={() => dispatch(removeItem(item))}>Remove Item</button>) : (<button className="add-btn" onClick={() => dispatch(addItem(item))}>Add to Cart</button>)
                            }
                        </div>
                    </div>
                ))}

            </section >

        </>
    )
}
export default Product;
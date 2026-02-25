import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "./Redux/slice";
import { useEffect } from "react";
import { fetchProduct } from "./Redux/productSlice"

function Product() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProduct());
    }, [])
    const data = useSelector((state) => state.product.items);

    return (
        <>
            <section className="products">
                {data.length && data.map((item) => (
                    <div key={item.id} className="product-card">
                        <span className="ml-badge">{item.weight}</span>
                        <div className="image-wrapper">
                            <img src={item.thumbnail} alt={item.title} className="small-img" />

                            {/* Big Image */}
                            {/* {activeId === item.id && ( */}
                            <div className="big-img-box">
                                <img src={item.images[0]} alt="Big Preview" />
                            </div>
                        </div>
                        {/* )} */}
                        <h3>{item.title}</h3>
                        <p>{item.brand}</p>
                        <div className="rating">
                            ⭐ <span className="rate">{Math.max(...item.reviews.map(val => val.rating))}</span>
                            <span className="reviews">| {item.reviews.length} reviews</span>
                        </div>
                        <div className="price-row">
                            <span className="price">$9.99</span>
                            <span className="discount">(10.48% OFF)</span>
                        </div>
                        <div className="btn-row">
                            <button className="add-btn" onClick={() => dispatch(addItem())}>Add to Cart</button>
                            <button className="remove-btn" onClick={() => dispatch(removeItem())}>Remove</button>
                        </div>
                    </div>
                ))}

            </section>

        </>
    )
}
export default Product;
import React from "react";
import { Product } from "./Data.js"
export default function App({ cartItems = [], addToCart }) {
    return (
        <>
            <h2>Remote App Running 🚀</h2>
            <h3>Remote Cart Count: {cartItems.length}</h3>
            <div style={{ display: "flex", gap: "20px", flexWrap: 'wrap' }}>
                {Product.map((item) => (
                    <div key={item.id} style={{ width: '200px' }}>
                        <img style={{ width: '200px', height: '267px' }} src={item.img} alt={item.name} />
                        <h4>{item.name}</h4>
                        <p>Rs. {item.price}</p>
                        <button type="button" onClick={() => addToCart?.(item)}>
                            Add to Cart
                        </button>
                    </div>
                ))}

            </div>
        </>
    );
}

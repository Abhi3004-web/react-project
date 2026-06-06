import React, { Suspense, useState } from 'react';

const RemoteApp = React.lazy(() => import('app2/App'));
const RemoteApp1 = React.lazy(() => import('app3/Remote_App1'));

export default function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    console.log(product);
    setCartItems((prevItems) => [...prevItems, product]);
  };

  return (
    <div>
      <h1>Host App</h1>
      <h2>Cart Count: {cartItems.length}</h2>

      <div>
        {cartItems.map((item, index) => (
          <p key={`${item.id}-${index}`}>
            {item.name} - Rs. {item.price}
          </p>
        ))}
      </div>

      <Suspense fallback="Loading...">
        <RemoteApp cartItems={cartItems} addToCart={addToCart} />
        <RemoteApp1 />
      </Suspense>
    </div>
  );
}

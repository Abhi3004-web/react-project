import Header from "./header"
import "./App.css"
import Product from "./Product"
import { useDispatch } from "react-redux"
import { clearAllItem } from "./Redux/slice";

function App() {
  const dispatch = useDispatch();
  return (
    <>
      <Header />
      <div className="product-card1">
        <button onClick={() => dispatch(clearAllItem())} className="Add-cart">clear All Item</button></div>
      <Product />

    </>
  )
}

export default App

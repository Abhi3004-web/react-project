import Header from "./header"
import "./App.css"
import Product from "./Routes/Product"
import CartItem from "./Routes/CartItem.jsx"
import Home from "./Routes/Home"
import { BrowserRouter, Route, Routes } from "react-router-dom"


function App() {
  // const dispatch = useDispatch();
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/product" element={<Product />}></Route>
          <Route path="/cartItem" element={<CartItem />}></Route>
        </Routes>
      </BrowserRouter>


    </>
  )
}

export default App

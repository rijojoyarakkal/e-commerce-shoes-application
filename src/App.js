import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Navbar } from "./components/navbar";
import { Shop } from "./pages/shop/shop";
import { Contact } from "./pages/contact";
import { Cart } from "./pages/cart/cart";
import { ShopContextProvider } from "./context/shop-context";
import Login from "./pages/user/Login"
import Signup from "./pages/user/Signup"
import { Product } from "./pages/shop/product";
import Home from "./pages/Home/Home";
function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
        {/* <Navbar ></Navbar> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/shop" element={<Shop />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Product" element={<Product/>}/>
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;

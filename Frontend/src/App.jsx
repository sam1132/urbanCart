import { useState } from "react";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Card from "./components/Card";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wishlist from "./components/Wishlist";
import Profile from "./components/Profile";
import Profiledetail from './components/ProfileDetails'
import Myorder from "./components/Myorder";
import CartPage from "./components/CartPage";
import { Toaster } from "react-hot-toast";
import ProtectRoute from "./components/ProtectRoute";
import Products from "./components/Products";
import SpecificProduct from "./components/SpecificProduct";
import ProductDetails from "./components/ProductDetails";
import PaymentGateway from "./components/PaymentGateway";
function App() {
  
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/products" element={<Products/>}/>
          <Route path="/productsdetails/:id" element={<ProductDetails/>}/>
          <Route path="/products/:maincategory/:subCategory" element={<SpecificProduct/>}/>
          //////////////////////////////////////////////////////////////////////
          <Route element={<ProtectRoute />}>
            <Route
              path="/Wishlist"
              element={<Wishlist />}
            />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/profileDetails" element={<Profiledetail />} />
            <Route path="/payment" element={<PaymentGateway />} />
            <Route path="/myorder" element={<Myorder />} />
          </Route>
          ///////////////////////////////////////////////////////////////////////
          <Route path="/signin" element={<Signin />} />

          <Route path="/cards" element={<Card />} />
        </Routes>
        <Toaster />
        <Footer />
      </Router>
    </>
  );
}

export default App;

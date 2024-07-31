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
function App() {
  const products = [
    {
      id: 2,
      name: "Grill Ultimate Bundle",
      image:
        "https://images.unsplash.com/photo-1567016526105-22da7c13161a?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 549.99,
      quantity: 1,
      details: "Add accident protection for ₹29.99",
    },
    {
      id: 3,
      name: "Starters (4 pack)",
      image:
        "https://unsplash.com/photos/a-chair-sitting-in-front-of-a-window-in-a-room-z9edjs3WF80",
      price: 0.0,
      quantity: 1,
    },
    {
      id: 4,
      name: "Charcoal Grill Pack",
      image:
        "https://plus.unsplash.com/premium_photo-1668073437554-b48d66e9f368?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 0.0,
      quantity: 1,
    },
  ];
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/products" element={<Products/>}/>
          <Route path="/products/:maincategory/:subCategory" element={<SpecificProduct/>}/>
          <Route element={<ProtectRoute />}>
            <Route
              path="/Wishlist"
              element={<Wishlist wishlistProducts={products} />}
            />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/profileDetails" element={<Profiledetail />} />
            <Route path="/my-order" element={<Myorder />} />
          </Route>
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

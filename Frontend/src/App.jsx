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
import Myorder from "./components/Myorder";
import CartPage from "./components/CartPage";
import { Toaster } from "react-hot-toast";
import ProtectRoute from "./components/ProtectRoute";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route element={<ProtectRoute />}>
            <Route path="/Wishlist" element={<Wishlist />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/my-order" element={<Myorder />} />
          </Route>
          <Route path="/signin" element={<Signin />} />

          {/* <Route path='/cards' element={<Card/>}/> */}
        </Routes>
        <Toaster />
        <Footer />
      </Router>
    </>
  );
}

export default App;

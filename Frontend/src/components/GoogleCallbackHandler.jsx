import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const GoogleCallbackHandler = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      const urlParams = new URLSearchParams(window.location.search);
      const token = urlParams.get("token");
      if (token) {
        localStorage.setItem("token", token);
        toast.success("Google Login successful");
        navigate("/");
          setTimeout(()=>{
            window.location.reload()
          },1000)
      } else {
        toast.error("No token received from the server.");
        console.log("sign in yha se ja rha h");
        navigate("/signin");
      }
    }, 1000);
    return () => clearTimeout(timeout);
  }, [navigate]);

  return <div>Loading...</div>;
};

export default GoogleCallbackHandler;

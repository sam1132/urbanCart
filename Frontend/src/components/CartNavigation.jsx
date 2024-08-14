import { useNavigate } from "react-router-dom";

export const handleCart = (navigate, products) => {
  navigate("/cart", { state: { products } });
};

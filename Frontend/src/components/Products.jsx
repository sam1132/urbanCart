import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import Card from "../components/Card";
const Products = () => {
  const [Products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/product/productlist"
        );
        setProducts(response.data);
      } catch (error) {
        toast.error("Error Setting Products");
      }
    };
    fetchProducts();
  }, []);
  return (
    <>
      <section className="max-w-[95rem] mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-wrap my-10">
        {Products.length > 0 ? (
            Products.map((product) => (
              <Card key={product.id} product={product} />
            ))
          ) : (
            <p>Loading products...</p> 
          )}
        </div>
      </section>
    </>
  );
};

export default Products;

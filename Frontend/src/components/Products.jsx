import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import Card from "../components/Card";
import { useLocation } from "react-router-dom";
const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const Products = () => {
  const [loading, setLoading] = useState(true);
  const query = useQuery().get("query");
  const category = useQuery().get("category");
  const [Products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `http://localhost:4000/product/search?query=${query}&category=${category}`
        );
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching search results:", error);
      } finally {
        setLoading(false);
      }
    };

    if (query || category) {
      fetchProducts();
    }
  }, [query, category]);
  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     try {
  //       const response = await axios.get(
  //         "http://localhost:4000/product/productlist"
  //       );
  //       setProducts(response.data);
  //     } catch (error) {
  //       toast.error("Error Setting Products");
  //     }
  //   };
  //   fetchProducts();
  // }, []);
  return (
    <>
      <section className="max-w-[95rem] mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-wrap my-10">
          <h1 className="w-full text-2xl mb-6 font-bold text-center my-5">
            {query
              ? `Search Results for ${query} in ${category || "All Categories"}`
              : `Showing results for ${category || "All Categories"}`}
          </h1>
          {loading ? (
            <p className="w-full text-center">Loading products...</p>
          ) : Products.length > 0 ? (
            Products.map((product) => (
              <Card key={product._id} product={product} />
            ))
          ) : (
            <p className="w-full text-center">No products found</p>
          )}
        </div>
      </section>
    </>
  );
};

export default Products;

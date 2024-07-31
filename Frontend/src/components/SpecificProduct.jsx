import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Card from './Card';
const SpecificProduct = () => {
  const { maincategory, subCategory } = useParams(); 
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  console.log("Main Category:", maincategory);
  console.log("Sub Category:", subCategory);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/product/${maincategory}/${subCategory}`);
        setProducts(response.data); 
        
      } catch (err) {
        if(response.status === "404"){setError("No products available")}
        else{  setError(err.message);}
      
      } finally {
        setLoading(false);
      }
    };

    fetchProducts(); 
  }, [maincategory, subCategory]); 

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1 className='text-center my-5 text-lg md:text-2xl font-bold '>Products for {subCategory} in {maincategory}</h1>
      <div>
        {products.length > 0 ? (
          <div className="flex flex-wrap my-10">
            {products.map(product => (
              <Card key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
};

export default SpecificProduct;

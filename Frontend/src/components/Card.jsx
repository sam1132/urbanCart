import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import axios from 'axios'
import toast from 'react-hot-toast'
const Card = ({ product }) => {
  const [liked, setLiked] = useState(false);

  const toggleLike = async() => {
    try {
      const token = localStorage.getItem('token')
      const config = {
        headers: {
            Authorization: `Bearer ${token}`, 
          },
    }
    const id = product.id

      const response = await axios.post(`http://localhost:4000/wishlist/add/${id}`,{},config)
      if(response.status === 200){
        toast.success("Product added to wishlist")
        setLiked(!liked);
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        toast.error("Product already in wishlist");
      } else {
        toast.error("Error adding product");
      }
    }
  };

  const truncateDescription = (description, maxLength) => {
    if (description.length <= maxLength) return description;
    return description.slice(0, maxLength) + '...';
  };

  return (
    <>
    <div className="max-w-[1140px] mx-auto mt-10">
      <div className="relative flex flex-col text-gray-700 bg-[#fef8f396] shadow-md shadow-gray-300 bg-clip-border rounded-xl w-80">
        <div className="cursor-pointer relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white bg-clip-border rounded-xl h-72">
          <img
            src={product.image}
            alt={product.name}
            className="object-cover w-full h-full"
          />
          <div className="absolute top-4 right-4" onClick={toggleLike}>
            {liked ? (
              <i className="fas fa-heart text-red-500 text-2xl"></i>
            ) : (
              <i className="fa-regular fa-heart text-2xl text-red-600"></i>
            )}
          </div>
        </div>

        <div className="p-6">
          <div className="flex items-center justify-between mb-2">
            <p className="block font-sans text-xl font-semibold leading-relaxed text-black truncate">
              {product.title}
            </p>
            <p className="block font-sans text-2xl font-bold text-black leading-relaxed text-blue-gray-900">
              ${product.price}
            </p>
          </div>
          <p className="block font-sans text-md leading-6 font-normal text-gray-700 opacity-75">
            {truncateDescription(product.description, 120)}
          </p>
        </div>
        <div className="p-6 pt-0">
          <button
            className="bg-blue-700 text-white align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg shadow-gray-900/10 hover:shadow-gray-900/20 focus:opacity-[0.85] active:opacity-[0.85] active:shadow-none block w-full bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
            type="button"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>

      {/* <div className="max-w-[1140px] mx-auto mt-10 ">
        <div className=" relative flex flex-col text-gray-700 bg-[#fef8f396] shadow-md shadow-gray-300 bg-clip-border rounded-xl w-96">
          <div className="cursor-pointer relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white bg-clip-border rounded-xl h-96">
            <img
              src="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=927&amp;q=80"
              alt="card-image"
              className="object-cover w-full h-full "
            />
            <div className="absolute top-4 right-4" onClick={toggleLike}>
                {liked ?<i className="fas fa-heart text-red-500 text-2xl"></i> :<i class="fa-regular fa-heart text-2xl text-red-600"></i>}
              
            </div>
          </div>

          <div className="p-6">
            <div className="flex items-center justify-between mb-2">
              <p className="block font-sans text-2xl  font-semibold leading-relaxed text-black">
                Apple AirPods
              </p>
              <p className="block font-sans text-2xl  font-bold text-black leading-relaxed text-blue-gray-900">
                $95.00
              </p>
            </div>
            <p className="block font-sans text-md leading-6  font-normal  text-gray-700 opacity-75">
              With plenty of talk and listen time, voice-activated Siri access,
              and an available wireless charging case.
            </p>
          </div>
          <div className="p-6 pt-0">
            <button
              className=" bg-blue-700 text-white align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg shadow-gray-900/10 hover:shadow-gray-900/20 focus:opacity-[0.85] active:opacity-[0.85] active:shadow-none block w-full bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
              type="button"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Card;

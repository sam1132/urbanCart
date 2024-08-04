import React, { useEffect, useState } from 'react';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios'
import toast from 'react-hot-toast'
const Wishlist = () => {

  const [wishListNum, setWishListNum] = useState(0);
  const [wishlist, setWishlist] = useState([]);
  const token = localStorage.getItem('token')
  const config = {
    headers: {
        Authorization: `Bearer ${token}`, 
      },
}
  useEffect(() => {
      const getWishlist = async ()=>{
        try {
          const response = await axios.get("http://localhost:4000/wishlist/getwishlist",config)
          setWishlist(response.data)
        } catch (error) {
          toast.error("Error Fetching Wishlist")
        }
      };
      getWishlist()
  }, [wishlist]);

  useEffect(() => {
    setWishListNum(wishlist.length);
  }, [wishlist]);

  const handleRemoveFromWishlist = (id) => {
    setWishlist((prevWishlist) => prevWishlist.filter((product) => product.id !== id));
  };
  const truncateDescription = (description, maxLength) => {
    if (description.length <= maxLength) return description;
    return description.slice(0, maxLength) + '...';
  };

  return (
    <div className="p-4">
      <h2 className="flex justify-center font-serif text-2xl font-bold mb-4">{wishlist.length} Item{wishlist.length !== 1 ? 's' : ''} In Wishlist</h2>
      {wishlist.length === 0 ? (
        <p className='flex justify-center'>Your wishlist is empty.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {wishlist.map((product) => (
            <div key={product.id} className="relative bg-white p-4 rounded-lg shadow-lg">
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-t-lg" />
              <div className="p-2">
                <h3 className="text-xl font-semibold">{truncateDescription(product.title, 50)}</h3>
                <p className="text-gray-500"> {truncateDescription(product.description, 100)}</p>
                <div className="flex justify-between items-center mt-2">
                  <p className="text-lg font-bold">₹{product.price}</p>
                  <button
                    onClick={() => handleRemoveFromWishlist(product.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
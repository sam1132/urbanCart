import React, { useEffect, useState } from 'react';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Wishlist = ({ wishlistProducts }) => {


// Dummy Data for test which i pass thorugh props like this :- <Wishlist wishlistProducts={products}/>



  const [wishListNum, setWishListNum] = useState(0);
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    setWishlist(wishlistProducts);
  }, [wishlistProducts]);

  useEffect(() => {
    setWishListNum(wishlist.length);
  }, [wishlist]);

  const handleRemoveFromWishlist = (id) => {
    setWishlist((prevWishlist) => prevWishlist.filter((product) => product.id !== id));
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
                <h3 className="text-xl font-semibold">{product.name}</h3>
                <p className="text-gray-500">{product.description}</p>
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
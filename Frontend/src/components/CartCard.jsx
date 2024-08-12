import React from 'react';
import PropTypes from 'prop-types';

const CartCard = ({ item }) => {
  if (!item) {
    return null; 
  }
  const formattedDate = item.deliveryDate ? new Date(item.deliveryDate).toLocaleDateString() : new Date().toLocaleDateString();

  return (
    <div className="w-[18rem] h-[26rem] p-4 bg-gradient-to-r from-blue-50 to-blue-50 relative overflow-visible shadow-md">
      <div className="bg-blue-100 h-[50%] w-full rounded-lg transition-transform duration-300 ease-in-out hover:translate-y-[-10%] hover:shadow-lg">
        <img className="object-cover w-full h-full rounded-lg" src={item.productImage} alt={item.productTitle} />
      </div>
      <div className="pt-2">
        <p className="font-bold text-xl leading-tight text-gray-800">{item.productTitle}</p>
      </div>
      <div className="pt-2">
        <p className="font-bold text-xl leading-tight text-gray-800">Quantity {item.quantity}</p>
      </div>
      <div className="w-full flex justify-between items-center pt-2 border-t border-gray-300">
      </div>
      <div className="w-full pt-2 text-gray-600 text-sm">
        Delivery Date: {formattedDate}
      </div>
    </div>
  );
};

CartCard.propTypes = {
  item: PropTypes.shape({
    productImage: PropTypes.string,
    productTitle: PropTypes.string,
    quantity: PropTypes.number,
    deliveryDate: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)])
  }).isRequired
};

export default CartCard;

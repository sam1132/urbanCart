import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

const CartPage = () => {
  const initialCartItems = [
    {
      id: 2,
      name: "Grill Ultimate Bundle",
      image:
        "https://images.unsplash.com/photo-1567016526105-22da7c13161a?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 549.99,
      quantity: 1,
      details: "Add accident protection for ₹29.99",
    },
    {
      id: 3,
      name: "Starters (4 pack)",
      image:
        "https://unsplash.com/photos/a-chair-sitting-in-front-of-a-window-in-a-room-z9edjs3WF80",
      price: 0.0,
      quantity: 1,
    },
    {
      id: 4,
      name: "Charcoal Grill Pack",
      image:
        "https://plus.unsplash.com/premium_photo-1668073437554-b48d66e9f368?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 0.0,
      quantity: 1,
    },
  ];

  const [cartItems, setCartItems] = useState(initialCartItems);
  const [itemNum, setItemNum] = useState(initialCartItems.length);
  const [deliveryCharges, setdeliveryCharges] = useState(120);

  const increaseQuantity = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const calculateSubtotal = () => {
    return cartItems
      .reduce((acc, item) => acc + item.price * item.quantity, 0)
      .toFixed(2);
  };

  const calculateSalesTax = () => {
    const subtotal = calculateSubtotal();
    const taxRate = 0.1;
    return (subtotal * taxRate).toFixed(2);
  };

  const calculateGrandTotal = () => {
    const subtotal = parseFloat(calculateSubtotal());
    const salesTax = parseFloat(calculateSalesTax());
    return (subtotal + salesTax + deliveryCharges).toFixed(2);
  };

  useEffect(() => {
    setItemNum(cartItems.length);
    if (cartItems.length == 0) {
      setdeliveryCharges(0);
    }
  }, [cartItems]);

  return (
    <div className="container mx-auto p-6">
      <h1 className="flex justify-center font-sans text-2xl font-bold mb-5">
        Your Cart ({itemNum} items)
      </h1>
      <div className="grid grid-cols-4 gap-4 border-b pb-2 mb-2">
        <div className="font-bold">Item</div>
        <div className="font-bold">Price</div>
        <div className="font-bold">Quantity</div>
        <div className="font-bold">Total</div>
      </div>
      {cartItems.map((item) => (
        <div key={item.id} className="grid grid-cols-4 gap-y-4 gap-x-5 border-b py-2 ">
          <div className="flex items-center flex-col md:flex-row  m-2 ">
            <img src={item.image} alt={item.name} className="w-16 h-16 mr-4" />
            <div className=" overflow-hidden">
              <div className="block font-bold truncate max-w-full ml-12 md:ml-0 mt-3">
                {item.name}
              </div>
              {item.details && (
                <div className="text-sm mt-3 ml-12 md:ml-0 text-gray-500  ">
                  {item.details}
                </div>
              )}
            </div>
          </div>
          <div className="flex items-center">₹{item.price.toFixed(2)}</div>
          <div className="flex items-center">
            <button
              onClick={() => decreaseQuantity(item.id)}
              className="mr-2 rounded-l"
            >
              <FontAwesomeIcon icon={faMinus} />
            </button>
            <input
              type="text"
              value={item.quantity}
              readOnly
              className="w-8 text-center border-none focus:ring-0 focus:outline-none"
            />
            <button
              onClick={() => increaseQuantity(item.id)}
              className="ml-2 rounded-r"
            >
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </div>
          <div className="flex items-center justify-between">
            <span>₹{(item.price * item.quantity).toFixed(2)}</span>
            <button
              onClick={() => removeItem(item.id)}
              className="ml-4 text-red-500"
            >
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </div>
        </div>
      ))}

      <div className="mt-4 lg:flex lg:justify-end">
        <div className="lg:w-1/3 lg:pl-4">
          <div className="flex justify-between">
            <span>Subtotal:</span>
            <span>₹{calculateSubtotal()}</span>
          </div>
          <hr className="my-2 border-t border-gray-200" />
          <div className="flex justify-between">
            <span>Sales Tax:</span>
            <span>₹{calculateSalesTax()}</span>
          </div>
          <hr className="my-2 border-t border-gray-200" />
          <div className="flex justify-between">
            <span>Delivery Charges:</span>
            <span>₹{deliveryCharges}</span>
          </div>
          <hr className="my-2 border-t border-gray-200" />
          <div className="flex justify-between">
            <span>Coupon Code:</span>
            <button className="text-blue-500">Add Coupon</button>
          </div>
          <hr className="my-2 border-t border-gray-200" />
          <div className="flex justify-between font-bold text-xl mt-2">
            <span>Grand total:</span>
            <span>₹{calculateGrandTotal()}</span>
          </div>
          <hr className="my-2 border-t border-gray-200" />
          <button className="mt-4 w-full py-2 bg-green-500 text-white rounded">
            Check out
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;

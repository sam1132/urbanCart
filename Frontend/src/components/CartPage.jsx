import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

const CartPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const initialProducts = (location.state?.products || []).map(product => ({
        ...product,
        quantity: product.quantity || 1 
    }));
    const [cartItems, setCartItems] = useState(initialProducts);
    const [itemNum, setItemNum] = useState(cartItems.length);
    const [deliveryCharges, setDeliveryCharges] = useState(120);

    useEffect(() => {
        setItemNum(cartItems.length);
        if (cartItems.length === 0) {
            setDeliveryCharges(0);
        }
    }, [cartItems]);

    const increaseQuantity = (id) => {
        const updatedItems = cartItems.map((item) =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );
        setCartItems(updatedItems);
    };

    const decreaseQuantity = (id) => {
        const updatedItems = cartItems.map((item) =>
            item.id === id && item.quantity > 1
                ? { ...item, quantity: item.quantity - 1 }
                : item
        );
        setCartItems(updatedItems);
    };

    const removeItem = (id) => {
        const updatedItems = cartItems.filter((item) => item.id !== id);
        setCartItems(updatedItems);
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

    const handleCheckout = () => {
        console.log(cartItems)
        navigate("/payment", {
            state: {
                cartItems,
                grandTotal: calculateGrandTotal(),
                subtotal: calculateSubtotal(),
                salesTax: calculateSalesTax(),
                deliveryCharges
            }
        });
    };
    

    return (
        <div className="container mx-auto p-4">
            <h1 className="flex justify-center font-sans text-2xl font-bold mb-5">
                Your Cart ({itemNum} items)
            </h1>
            {cartItems.length === 0 ? (
                <p className="text-center text-gray-500">Your cart is empty.</p>
            ) : (
                <>
                    <div className="grid grid-cols-4 gap-4 border-b pb-2 mb-2">
                        <div className="font-bold">Item</div>
                        <div className="font-bold">Price</div>
                        <div className="font-bold">Quantity</div>
                        <div className="font-bold">Total</div>
                    </div>
                    {cartItems.map((item) => (
                        <div key={item.id} className="grid grid-cols-4 gap-4 border-b py-2">
                            <div className="flex items-center">
                                <img src={item.image} alt={item.title} className="w-16 h-16 mr-4" />
                                <div className="overflow-hidden">
                                    <span className="block font-bold truncate max-w-full">{item.title}</span>
                                    {item.details && (
                                        <span className="text-sm text-gray-500 truncate max-w-full">{item.details}</span>
                                    )}
                                </div>
                            </div>
                            <div className="flex items-center">₹{item.price.toFixed(2)}</div>
                            <div className="flex items-center">
                                <button
                                    onClick={() => decreaseQuantity(item.id)}
                                    className="px-2 py-1 bg-gray-200 rounded-l"
                                >
                                    <FontAwesomeIcon icon={faMinus} />
                                </button>
                                <input
                                    type="text"
                                    value={item.quantity}
                                    readOnly
                                    className="w-8 text-center border-t border-b border-gray-200"
                                />
                                <button
                                    onClick={() => increaseQuantity(item.id)}
                                    className="px-2 py-1 bg-gray-200 rounded-r"
                                >
                                    <FontAwesomeIcon icon={faPlus} />
                                </button>
                            </div>
                            <div className="flex items-center">
                                ₹{(item.price * item.quantity).toFixed(2)}
                            </div>
                            <button
                                onClick={() => removeItem(item.id)}
                                className="ml-auto text-red-500"
                            >
                                <FontAwesomeIcon icon={faTrash} color="blue" />
                            </button>
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
                            <button
                                className="mt-4 w-full py-2 bg-green-500 text-white rounded"
                                onClick={handleCheckout}
                            >
                                Check out
                            </button>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default CartPage;

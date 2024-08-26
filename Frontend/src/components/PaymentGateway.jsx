import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const loadScript = (src) => {
    return new Promise((resolve) => {
        const script = document.createElement('script');
        script.src = src;
        script.onload = () => resolve(true);
        script.onerror = () => resolve(false);
        document.body.appendChild(script);
    });
};

const PaymentGateway = () => {
    const BaseUrl = "https://urbancart-b989.onrender.com"
    const location = useLocation();
    const navigate = useNavigate();
    const { cartItems, grandTotal, subtotal, salesTax, deliveryCharges } = location.state || {};
    const [isProcessing, setIsProcessing] = useState(false);

    const showRazorpay = async () => {
        if (isProcessing) return;
        setIsProcessing(true);

        const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js');
        if (!res) {
            alert('Razorpay SDK failed to load. Are you online?');
            setIsProcessing(false);
            return;
        }
        const token = localStorage.getItem('token')
        const config = {
          headers: {
              Authorization: `Bearer ${token}`, 
            },
      }
        try {
            const response = await axios.post(`${BaseUrl}/api/payment/razorpay`, {
                amount: grandTotal
            },config);

            const data = response.data;

            const options = {
                key: "rzp_test_4W26iQdHpqmXmZ",
                currency: data.currency,
                amount: (data.amount * 100).toString(),
                order_id: data.id,
                name: 'Shopping',
                description: 'Thank you for your purchase',
                handler: async function (response) {
                    try {
                        const orderDetails = {
                            cartItems: cartItems.map(item => ({
                                productId: item.id,
                                productImage: item.image,
                                productTitle: item.title,
                                quantity: item.quantity,
                                price:item.price,
                                deliveryDate: new Date().toISOString()
                            })),
                            paymentDate: new Date().toISOString() 
                        };
console.log(orderDetails)
                        await axios.post(`${BaseUrl}/api/myorders/order`,orderDetails,config);
                        setTimeout(() => {
                            navigate("/myorder");
                        }, 3000);

                    } catch (error) {
                        console.error('Error storing payment details:', error);
                    }
                },
                prefill: {
                    name: 'ainwik',
                    email: 'ainwik@gmail.com',
                    contact: '9999999999',
                },
            };

            const paymentObject = new window.Razorpay(options);
            paymentObject.open();

        } catch (error) {
            console.error('Error initiating Razorpay payment:', error);
            setIsProcessing(false);
        }
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-5">Payment Gateway</h1>
            <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
                <div className="mb-4">
                    <p>Subtotal: ₹{subtotal}</p>
                    <p>Sales Tax: ₹{salesTax}</p>
                    <p>Delivery Charges: ₹{deliveryCharges}</p>
                </div>
                <div className="font-bold text-lg mb-4">
                    Grand Total: ₹{grandTotal}
                </div>
                <button
                    onClick={showRazorpay}
                    className={`w-full py-2 bg-blue-500 text-white rounded ${isProcessing ? 'opacity-50 cursor-not-allowed' : ''}`}
                    disabled={isProcessing}
                >
                    {isProcessing ? 'Processing...' : 'Pay Now'}
                </button>
            </div>
        </div>
    );
};

export default PaymentGateway;

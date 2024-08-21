import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CartCard from './CartCard';

const MyOrder = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const token = localStorage.getItem('token')
    const config = {
        headers: {
            Authorization: `Bearer ${token}`, 
          },
    }
    const fetchOrders = async () => {
        try {
            const response = await axios.get('https://urban-cart-fh8j-l40awq7a3-sam113273gmailcoms-projects.vercel.app/api/myorders/all',config);
            setOrders(response.data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching orders:', error);
            setError('Error fetching orders');
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchOrders();
    }, []);

    if (loading) {
        console.log('Loading orders...');
        return <p>Loading...</p>;
    }
    if (error) {
        console.error('Error:', error);
        return <p>{error}</p>;
    }

    return (
        <div className="order-history p-6">
            <h1 className="text-center text-3xl font-bold mb-6">My Orders</h1>
            <div className="orders-container grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {orders.length > 0 ? (
                    orders.flatMap((order) =>
                        order.cartItems.map((item) => (
                            <CartCard
                                key={`${order._id}-${item.productId}`}
                                item={{
                                    productId: item.productId,
                                    productImage: item.productImage,
                                    productTitle: item.productTitle,
                                    quantity: item.quantity,
                                    deliveryDate: item.deliveryDate,
                                }}
                            />
                        ))
                    )
                ) : (
                    <p className="text-center text-gray-500">No order details found.</p>
                )}
            </div>
        </div>
    );
};

export default MyOrder;

import mongoose from 'mongoose';

const paymentSchema = new mongoose.Schema({
    razorpay_order_id: String,
    razorpay_payment_id: String,
    razorpay_signature: String,
    cartItems: Array,
    paymentDate: Date,
    amount: Number,
    currency: String
});

const Payment = mongoose.model('Payment', paymentSchema);

export default Payment;

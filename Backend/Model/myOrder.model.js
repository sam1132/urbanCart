import mongoose from 'mongoose';

const myOrderSchema = new mongoose.Schema({
  cartItems: [
    {
      productId: { type: String, required: true },
      productImage: { type: String, required: true },
      productTitle: { type: String, required: true },
      deliveryDate: { type: Date, required: true },
      quantity: { type: Number, default: 1 },
      price: { type: Number, required: true }
    }
  ],
  paymentDate: { type: Date, required: true }
}, { timestamps: true });

const MyOrder = mongoose.model('MyOrder', myOrderSchema);

export default MyOrder;
import crypto from "crypto";
import Razorpay from "razorpay";
import shortid from "shortid";
import dotenv from "dotenv";
import PaymentDetail from "../Model/payment.model.js";

dotenv.config();
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

export const verification = async (req, res) => {
  const secret = process.env.RAZORPAY_SECRET;
  const shasum = crypto.createHmac("sha256", secret);
  shasum.update(JSON.stringify(req.body));
  const digest = shasum.digest("hex");
  if (digest === req.headers["x-razorpay-signature"]) {
    res.status(200).json({ message: "OK" });
  } else {
    res.status(403).json({ message: "Invalid" });
  }
};

export const orderCreation = async (req, res) => {
  const payment_capture = 1;
  const { amount } = req.body;
  const currency = "INR";
  const options = {
    amount: amount * 100,
    currency,
    receipt: shortid.generate(),
    payment_capture,
  };
  try {
    const response = await razorpay.orders.create(options);
    res.status(200).json({
      id: response.id,
      currency: response.currency,
      amount: response.amount / 100,
    });
  } catch (err) {
    console.error("Error creating Razorpay order:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const storePaymentDetails = async (req, res) => {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature, cartItems, amount, currency } = req.body;

    try {
        const paymentDetail = new PaymentDetail({
            razorpay_order_id,
            razorpay_payment_id,
            razorpay_signature,
            cartItems,
            paymentDate: new Date(),
            amount,
            currency
        });

        await paymentDetail.save();
        res.status(200).json({ message: 'Payment details stored successfully' });
    } catch (error) {
        console.error('Error storing payment details:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
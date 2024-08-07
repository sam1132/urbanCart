import express from "express";
import {
  verification,
  orderCreation,
  storePaymentDetails,
} from "../Controller/payment.controller.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/verification", authMiddleware, verification);
router.post("/razorpay", authMiddleware, orderCreation);
router.post("/store_payment_details", authMiddleware, storePaymentDetails);

export default router;

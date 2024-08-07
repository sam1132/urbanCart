import express from 'express'
import { allOrder,newOrder } from '../Controller/myOrder.controller.js'
import authMiddleware from '../middleware/authMiddleware.js';
const router = express.Router()

router.get('/all',authMiddleware,allOrder);
router.post('/order',authMiddleware,newOrder)

export default router
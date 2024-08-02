import express from 'express'
import { addWishlist } from '../Controller/wishlist.controller.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router()

router.post('/add/:id',authMiddleware,addWishlist)
export default router;
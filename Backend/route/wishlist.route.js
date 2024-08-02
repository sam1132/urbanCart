import express from 'express'
import { addWishlist, getWishlist } from '../Controller/wishlist.controller.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router()

router.post('/add/:id',authMiddleware,addWishlist)
router.get('/getwishlist',authMiddleware,getWishlist)
export default router;
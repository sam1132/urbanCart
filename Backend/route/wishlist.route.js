import express from 'express'
import { addWishlist, delWishlistProduct, getWishlist } from '../Controller/wishlist.controller.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router()

router.post('/add/:id',authMiddleware,addWishlist)
router.get('/getwishlist',authMiddleware,getWishlist)
router.delete('/remove/:id',authMiddleware,delWishlistProduct)
export default router;
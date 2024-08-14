import express from 'express'
import { getProduct, getProductById, getProductsByCategory, searchProduct } from '../Controller/product.controller.js'

const router = express.Router()

router.get('/productlist',getProduct)
router.get('/products/:id', getProductById);
router.get('/:mainCategory/:subCategory', getProductsByCategory);
router.get('/search',searchProduct)

export default router
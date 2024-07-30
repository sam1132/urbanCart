import express from 'express'
import { getProduct } from '../Controller/product.controller.js'

const router = express.Router()

router.get('/productlist',getProduct)

export default router
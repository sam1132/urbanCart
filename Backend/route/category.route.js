import express from 'express'
import { getCategory } from '../Controller/category.controller.js'

const router = express.Router()

router.get('/',getCategory)

export default router
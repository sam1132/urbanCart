import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import connectDb from './db/connectdb.js'
import categoryRoute from './route/category.route.js'
import userRoute from './route/user.route.js'
import wishlistRoute from './route/wishlist.route.js'
import ProductRoute from './route/product.route.js'
dotenv.config()
const port = process.env.PORT || 4001
const app = express()

connectDb()
//routes
app.use(cors())
app.use(express.json())
app.use('/',categoryRoute)
app.use('/user',userRoute)
app.use('/wishlist',wishlistRoute)


app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
}); 
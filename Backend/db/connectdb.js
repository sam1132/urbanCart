import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config()
const URI = process.env.MONGODB_URI
const connectDb = async()=>{
   try {
      const connectionInstance =  await mongoose.connect(URI)
   } catch (error) {
    process.exit(1)
      console.log('error message',error.message)
   } 
}

export default connectDb;

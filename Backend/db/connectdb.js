import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config()
const URI = process.env.MONGODB_URI
const connectDb = async()=>{
   try {
      const connectionInstance =  await mongoose.connect(URI)
      console.log(`MongoDB connected host : ${connectionInstance.connection.host}`)
   } catch (error) {
    console.log("Mongodb connection error",error)
    process.exit(1)
   } 
}

export default connectDb;

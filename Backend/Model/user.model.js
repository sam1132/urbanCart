import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: false,
  },
  address: {
    type: String,
    required: true,
    default: ' '
  },
  city: {
    type: String,
    required: true,
    default: ' '
  },
  landMark: {
    type: String,
    default: ' '
  },
  phoneNo: {
    type: String,
    required: true,
    default: ' '
  },
  pincode: {
    type: String,
    required: true,
    default: ' ',
  },
  googleId: { type: String, required: false },
  role:{
    type:Boolean,
    default:false
  },
  orders: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "MyOrder"
  }],
  wishlist: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product"
  }]
},{timestamps:true});

const User = mongoose.model("user", userSchema);

export default User;

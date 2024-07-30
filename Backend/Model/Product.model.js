import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    id:{type:String, required:true},
    image: { type: String, required: true },
    title:{type:String,required:true},
    ratings:{type:String,required:true},
    description: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    sizes: {
      type: [String],
      required: false,
    },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

export default  Product;

import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    id:{type:String, required:true},
    image: { type: String, required: true },
    title:{type:String,required:true},
    ratings:{type:String,required:true},
    description: { type: String, required: true },
    price: { type: Number, required: true },
    category: {
      male:{type:Boolean,default:false},
      topwear:{type:Boolean,default:false},
      bottomwear:{type:Boolean,default:false},
      sneaker:{type:Boolean,default:false},
      women:{type:Boolean,default:false},
      kids:{type:Boolean,default:false},
      furniture:{type:Boolean,default:false},
      books:{type:Boolean,default:false},
      homedecore:{type:Boolean,default:false},
      },
    size: {
      type: [String],
      required: false,
    },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

export default  Product;

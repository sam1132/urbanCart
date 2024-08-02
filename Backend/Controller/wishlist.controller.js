import User from "../Model/user.model.js";
import Product from "../Model/Product.model.js";
export const addWishlist = async (req,res) => {
  try {
    console.log("enterd the function")
    const id = req.params.id;
    const user = await User.findById(req.userId);
    const productId = Product.findOne({ id });
    if (!user.wishlist.includes(productId)) {
      user.wishlist.push(productId);
      await user.save();
      res.status(200).json({ message: "Product added to wishlist" });
    }
    else{
      res.status(400).json({ message: "Product already in wishlist" });  
    }
   
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

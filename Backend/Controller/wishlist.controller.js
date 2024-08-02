import User from "../Model/user.model.js";
import Product from "../Model/Product.model.js";
export const addWishlist = async (req,res) => {
  try {
    const id = req.params.id;
    const user = await User.findById(req.userId);
    const product = await Product.findOne({ id });
    console.log(product)
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
  }

  if (!user.wishlist) {
    user.wishlist = [];
}
    const productId = product._id
console.log(productId)
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

export const getWishlist = async(req,res)=>{
    try {
      console.log("enterd the funciton");
      const user = await User.findById(req.userId);
      const wishListArr = await Promise.all(
        user.wishlist.map(async (productId) => {
            return await Product.findById(productId);
        })
    );
    console.log(wishListArr)
    

      console.log(wishlist);
      // for (let i = 0; i < wishlistArr.length; i++) {
      //   const prod = await Product.findOne({productId:wishlistArr[i]});
      //   wishlist.push(prod);
      // }
  res.status(200).json(wishlist)
    } catch (error) {
      res.status(500);
    }
}
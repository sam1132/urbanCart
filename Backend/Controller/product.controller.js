import Product from "../Model/Product.model.js"

export const getProduct=async(req,res)=>{
    try {
        const product = await Product.find()
        res.status(200).json(product)
        
    } catch (error) {
        console.log("product controller problem",error)
        res.status(500).json(error)
    }
    }
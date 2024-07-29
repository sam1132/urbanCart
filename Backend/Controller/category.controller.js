import Category from '../Model/category.model.js'

export const getCategory=async(req,res)=>{
try {
    const category = await Category.find()
    res.status(200).json(category)
    
} catch (error) {
    console.log("category controller problem",error)
    res.status(500).json(error)
}
}

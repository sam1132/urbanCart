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

    export const getProductById = async (req, res) => {
        try {
            const { id } = req.params;
            const product = await Product.findOne({id});
            if (product) {
                res.json(product);
            } else {
                res.status(404).json({ message: 'Product not found' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Server error', error: error.message });
        }
    };

    export const getProductsByCategory =async (req, res) => {
        const {category} = req.params; 
        try {
            const product = await Product.find()
            const filteredProducts = product.filter((product) => {
                if( product.category.hasOwnProperty(category) && product.category[category]){
                    return product;
                }
            });
            if (filteredProducts.length > 0) {
                res.json(filteredProducts);
            } else {
                res.status(404).json({ message: 'No products found for this category' });
            }
        } catch (error) {
            res.status(500).json({message:'Server error'})
        }
    };
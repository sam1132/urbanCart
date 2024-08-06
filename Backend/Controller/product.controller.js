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
            console.log(id)
            const product = await Product.findOne({id});
            console.log(product)
            if (product) {
                res.json(product);
            } else {
                res.status(404).json({ message: 'Product not found' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Server error', error: error.message });
        }
    };

    export const getProductsByCategory = async (req, res) => {
        let { mainCategory, subCategory } = req.params;
        const queryFieldSub = `category.${subCategory}`;
        const queryFieldMain = `category.${mainCategory}`;
      
        try {
          let query;
      
          if (mainCategory === "main") {
            query = {
              [queryFieldSub]: true
            };
          } else {
            query = {
              [queryFieldMain]: true,
              [queryFieldSub]: true
            };
          }
      
          const products = await Product.find(query);
      
          if (products.length > 0) {
            res.json(products);
          } else {
            res.status(404).json({ message: 'No products found for this category' });
          }
        } catch (error) {
          res.status(500).json({ message: 'Server error' });
        }
      };
      
      
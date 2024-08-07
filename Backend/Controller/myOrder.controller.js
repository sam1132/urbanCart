import MyOrder from "../Model/myOrder.model.js";

export const allOrder = async (req, res) => {
  try {
    const orders = await MyOrder.find().exec();
    res.status(200).json(orders);
  } catch (error) {
    console.error('Error fetching orders:', error);
    res.status(500).json({ message: 'Server Error' });
  }
};

export const newOrder = async(req,res)=>{
    try {
        const newOrder = new MyOrder(req.body);
        const savedOrder = await newOrder.save();
        res.status(201).json(savedOrder);
    } catch (error) {
        console.error('Error creating new order:', error);
        res.status(400).json({ message: error.message });
    }
}

import MyOrder from "../Model/myOrder.model.js";
import User from '../Model/user.model.js'


export const allOrder = async (req, res) => {
  try {
    const user = await User.findById(req.userId).populate({
      path: 'orders',
      model: 'MyOrder'
    });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(user.orders);
  } catch (error) {
    console.error('Error fetching orders:', error);
    res.status(500).json({ message: 'Server Error' });
  }
};
// export const allOrder = async (req, res) => {
//   try {
//     const orders = await MyOrder.find().exec();
//     res.status(200).json(orders);
//   } catch (error) {
//     console.error('Error fetching orders:', error);
//     res.status(500).json({ message: 'Server Error' });
//   }
// };

export const newOrder = async(req,res)=>{
    try {
        const newOrder = new MyOrder(req.body);
        const savedOrder = await newOrder.save();
        const user = await User.findById(req.userId)

        if(!user){
          return res.status(404).json({message:'user not found'})
        }
        user.orders.push(savedOrder._id)
        await user.save()
        res.status(201).json(savedOrder);
    } catch (error) {
        console.error('Error creating new order:', error);
        res.status(400).json({ message: error.message });
    }
}

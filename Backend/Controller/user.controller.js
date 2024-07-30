import User from "../Model/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const secret = process.env.SECRET_KEY;
const generateToken = (userId) => {
  return jwt.sign({ id: userId }, secret, { expiresIn: "1h" });
};
export const signup = async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      res.status(400).json({ message: "User already exist" });
    }
    const hashPassword = await bcrypt.hash(password, 10);

    const userInfo = {
      username,
      email,
      password: hashPassword,
    };
    const newUser = new User(userInfo);
    await newUser.save();
    res.status(200).json({ message: "User created successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Invalid email" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid password" });

    const token = generateToken(user._id);
    res.status(200).json({message:"Login successfull",token})
  } catch (error) {
    res.status(500).json({ message: "server error" });
  }
};
 
export const completeProfile = async (req,res)=>{
  const {address,landMark,city,phoneNo,pincode}= req.body

  try {
    const user = await User.findById(req.userId)
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    user.address = address || user.address;
    user.landMark = landMark || user.landMark;
    user.city = city || user.city;
    user.phoneNo = phoneNo || user.phoneNo;
    user.pincode = pincode || user.pincode;
    await user.save();
    res.status(200).json({ message: 'Profile updated successfully', user });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
}

export const getUserDetail  = async(req,res)=>{
  try {
    const user = await User.findById(req.userId)
    if(!user){
      return res.status(404).json({ message: 'User not found' });
    }
      res.status(200).json(user)
  } catch (error) {
    return res.status(500).json({message:'Server Error'})
  }
}
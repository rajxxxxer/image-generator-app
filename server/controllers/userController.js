import userModel from '../models/user.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'; // ✅ Correct path and file

export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ success: false, message: "Missing fields" });
    }

    const existing = await userModel.findOne({ email });
    if (existing) {
      return res.status(409).json({ success: false, message: "User already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(password, salt);
    const newUser = new userModel({ name, email, password: hashed });

    const user = await newUser.save();
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
console.log(user);
    res.status(201).json({
      success: true,
      token,
      user: { name: user.name, email: user.email },
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, message: "Server error", error: err.message });
  }
};
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).json({ success: false, message: "User does not exist" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (isMatch) {
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
      return res.json({ success: true, token, user: { name: user.name, email: user.email } });
    } else {
      return res.status(401).json({ success: false, message: "Invalid credentials" });
    }
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
}
export const userCredits =async (req,res)=>{
try{
  
  const {userId }=req.body;
  const user=await userModel.findById(userId);
  res.json({success:true,credits:user.credit,
    user:{
      name:user.name
    }
  });


}
catch(err){
console.log(err.message)
res.json({success:false,mesg:err.message})
}
}
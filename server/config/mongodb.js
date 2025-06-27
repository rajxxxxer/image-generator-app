import mongoose from "mongoose";

  const conectdb=async ()=>{
    mongoose.connection.on('connected',()=>{
      console.log("connect")
    })
await mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.error('MongoDB Error:', err));
  }
  export default conectdb
import express from 'express';
import { loginUser, register, userCredits } from '../controllers/userController.js';
import { userAuth } from '../middlewares/auth.js';


 const userRouter=express.Router();
userRouter.post('/register',register)
userRouter.post('/login',loginUser);
userRouter.get('/credits',userAuth,userCredits)

export default userRouter;
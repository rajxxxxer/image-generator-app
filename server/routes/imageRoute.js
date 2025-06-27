import express from 'express'
import { generateImage } from '../controllers/imgCont.js'
import { userAuth } from '../middlewares/auth.js'


const imagerouter=express.Router()
imagerouter.post('/generate-image',userAuth,generateImage)
export default imagerouter
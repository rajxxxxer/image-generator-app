import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import conectdb from './config/mongodb.js';
import userRouter from './routes/useroute.js'; // ✅ default import
import imagerouter from './routes/imageRoute.js';

// Load environment variables
dotenv.config();

// Initialize app and port
const app = express();
const PORT = process.env.PORT || 4001;

// Connect to MongoDB
await conectdb();

// Middlewares
app.use(cors());
app.use(express.json());

// Test Route


// Auth Routes
app.use('/api/user', userRouter);
app.use('/api/image',imagerouter);

// Start Server
app.listen(PORT, () => {
  console.log(`✅ Server connected on port ${PORT}`);
});

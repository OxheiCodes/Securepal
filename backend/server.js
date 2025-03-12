import express from 'express';
import dotenv from 'dotenv';

import authRoutes from './routes/auth.route.js';

import { connectDB } from './lib/db.js'; 

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json({ limit: "5mb" })); // parse JSON request bodies

app.use("/api/v1/auth", authRoutes) // this is the route for the auth routes including versioning of the api "/api/v1/auth"

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    connectDB();
});
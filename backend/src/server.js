import express from 'express';
import dotenv from "dotenv"
dotenv.config();
import cookieParser from 'cookie-parser';
import cors from "cors"
import path from "path"
import authRoutes from "./routes/auth.route.js"
import userRoutes from "./routes/user.route.js"
import chatRoutes from "./routes/chat.route.js"
import { connectDB } from './lib/db.js';

const app = express();

// Parse cookies
app.use(cookieParser());
const PORT = process.env.PORT;
const __dirname=path.resolve();

// Enable CORS for frontend
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));

// Parse JSON bodies
app.use(express.json());

// API routes
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/chat", chatRoutes);

if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname, "../frontend/dist")));

    app.get("*", (req, res)=>{
        res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
    })
}



// Start server and connect to DB
app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
    connectDB();
});




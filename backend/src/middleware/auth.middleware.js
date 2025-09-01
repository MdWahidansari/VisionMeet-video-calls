import jwt from 'jsonwebtoken'
import User from '../models/User.js'

// Middleware to protect routes (only authenticated users can access)
export const protectRoute = async (req, res, next) => {
    try {
        // Get JWT token from cookies
        const token = req.cookies.jwt;
        if (!token) {
            return res.status(401).json({ message: "Unauthorized - No token provided" });
        }

        // Verify JWT token
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        if (!decoded) {
            return res.status(401).json({ message: "Unauthorized - Invalid token" });
        }

        // Find user from decoded token (exclude password)
        const user = await User.findById(decoded.userId).select("-password");
        if (!user) {
            return res.status(401).json({ message: "Unauthorized - User not found" });
        }

        // Attach user to request object
        req.user = user;

        // Proceed to next middleware/controller
        next();

    } catch (error) {
        console.log("Error in protectRoute middleware", error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};


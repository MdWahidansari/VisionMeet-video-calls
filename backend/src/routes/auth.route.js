import express from "express";
import { login, logout, onboard, signup } from "../controllers/auth.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";

const router = express.Router();

// Auth routes
router.post("/signup", signup);   // register new user
router.post("/login", login);     // login user
router.post("/logout", logout);   // logout user

// Onboarding route (protected)
router.post("/onboarding", protectRoute, onboard);

// Get current logged-in user (protected)
router.get("/me", protectRoute, (req, res) => {
    res.status(200).json({ success: true, user: req.user });
});

export default router;

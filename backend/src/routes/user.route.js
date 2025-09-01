import express from 'express'
import { protectRoute } from '../middleware/auth.middleware.js';
import { 
  acceptFriendRequest, 
  getFriendRequests, 
  getMyFriends, 
  getOutGoingFriendReqs, 
  getRecommendedUsers, 
  sendFriendRequest 
} from '../controllers/user.controller.js';

const router = express.Router();

// Apply auth middleware to all routes
router.use(protectRoute);

// Get recommended users
router.get("/users", getRecommendedUsers);

// Get logged-in user's friends
router.get("/friends", getMyFriends);

// Send a friend request
router.post("/friend-request/:id", sendFriendRequest);

// Accept a friend request
router.put("/friend-request/:id/accept", acceptFriendRequest);

// Get incoming friend requests
router.get("/friend-requests", getFriendRequests);

// Get outgoing friend requests
router.get("/outgoing-friend-requests", getOutGoingFriendReqs);

export default router;




















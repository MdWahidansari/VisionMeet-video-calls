// axios instance
import { axiosInstance } from "./axios";

// signup
export const signup = async (signupData) => {
  const response = await axiosInstance.post("/auth/signup", signupData);
  return response.data;
};

// login
export const login = async (loginData) => {
  const response = await axiosInstance.post("/auth/login", loginData);
  return response.data;
};

// logout
export const logout = async () => {
  const response = await axiosInstance.post("/auth/logout");
  return response.data;
};

// get current user
export const getAuthUser = async () => {
  try {
    const res = await axiosInstance.get("/auth/me");
    return res.data;
  } catch (error) {
    console.log("Error in getAuthUser:", error);
    return null;
  }
};

// complete onboarding
export const completeOnboarding = async (userData) => {
  const response = await axiosInstance.post("/auth/onboarding", userData);
  return response.data;
};

// user friends
export async function getUserFriends() {
  const response = await axiosInstance.get("/user/friends"); 
  return response.data;
}

// recommended users
export async function getRecommendedUsers() {
  const response = await axiosInstance.get("/user/users"); 
  return response.data;
}

// outgoing requests
export async function getOutgoingFriendReqs() {
  const response = await axiosInstance.get("/user/outgoing-friend-requests");
  return response.data;
}

// send friend request
export async function sendFriendRequest(userId) {
  const response = await axiosInstance.post(`/user/friend-request/${userId}`);
  return response.data;
}

// incoming requests
export async function getFriendRequests() {
  const response = await axiosInstance.get("/user/friend-requests");
  return response.data;
}

// accept request
export async function acceptFriendRequest(requestId) {
  const response = await axiosInstance.put(
    `/user/friend-request/${requestId}/accept`
  );
  return response.data;
}

// stream chat token
export async function getStreamToken() {
  const response = await axiosInstance.get("/chat/token");
  return response.data;
}

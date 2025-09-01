import { StreamChat } from 'stream-chat';
import "dotenv/config";

// Load API credentials from environment
const apiKey = process.env.STREAM_API_KEY;
const apiSecret = process.env.STREAM_API_SECRET;

if (!apiKey || !apiSecret) {
    console.error("Stream API key or Secret is missing");
}

// Initialize Stream client
const streamClient = StreamChat.getInstance(apiKey, apiSecret);

// Create or update user in Stream
export const upsertStreamUser = async (userData) => {
    try {
        await streamClient.upsertUser(userData);
        return userData;
    } catch (error) {
        console.error("Error upserting Stream user", error);
    }
};

// Generate auth token for a user
export const generateStreamToken = (userId) => {
    try {
        const userIdStr = userId.toString(); // ensure string format
        return streamClient.createToken(userIdStr);
    } catch (error) {
        console.error("Error generating Stream token", error);
    }
};

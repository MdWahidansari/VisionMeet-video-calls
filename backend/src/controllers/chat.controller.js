import { generateStreamToken } from "../lib/stream.js";

// Generate a Stream token for the logged-in user
export async function getStreamToken(req, res) {
    try {
        const token = generateStreamToken(req.user.id); // create token
        res.status(200).json({ token }); // send to client
    } catch (error) {
        console.error("Error in getStreamToken controller:", error.message);
        res.status(500).json({ message: "Internal Server Error" }); // fallback response
    }
}

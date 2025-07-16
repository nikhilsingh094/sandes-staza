// routes/messageRoute.js
import express from "express";
import { getMessages, sendMessage } from "../controllers/messageController.js";

const router = express.Router();

// ✅ Send message to user with JID as URL param
router.post("/send/:id", sendMessage);

// ✅ Get all messages between sender and receiver
router.get("/getMessages/:id", getMessages);

export default router;

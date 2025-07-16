import Conversation from "../modal/conversationModal.js";
import Message from "../modal/messageModal.js";
import { Op } from 'sequelize';


export const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const senderJid = req.headers['x-sender-jid']; // e.g., user1@localhost
    const receiverJid = req.params.id; // e.g., user2@localhost

    const participants = [senderJid, receiverJid];

    let conversation = await Conversation.findOne({
      where: {
        participantJids: { [Op.contains]: participants }
      }
    });

    if (!conversation) {
      conversation = await Conversation.create({
        participantJids: participants
      });
    }

    const newMessage = await Message.create({
      senderJid,
      receiverJid,
      message,
      messageType: "text",
      conversationId: conversation.id,
    });

    conversation.latestMessageId = newMessage.id;
    await conversation.save();

    return res.status(201).json({
      success: true,
      message: newMessage
    });

  } catch (error) {
    console.error("Send message error:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to send message",
    });
  }
};

export const getMessages = async (req, res) => {
  try {
     const senderJid = req.headers['x-sender-jid'];
    const receiverJid = req.params.id;

    const participants = [senderJid, receiverJid];

    const conversation = await Conversation.findOne({
      where: {
        participantJids: { [Op.contains]: participants }
      }
    });

    if (!conversation) {
      return res.status(200).json({ success: true, messages: [] });
    }

    const messages = await Message.findAll({
      where: {
        conversationId: conversation.id
      },
      order: [["createdAt", "ASC"]],
    });

    return res.status(200).json({ success: true, messages });

  } catch (error) {
    console.error("Get messages error:", error);
    return res.status(500).json({ success: false, message: "Something went wrong" });
  }
};

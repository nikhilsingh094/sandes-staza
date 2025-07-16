import Conversation from "./conversationModal.js";
import Message from "./messageModal.js";

// Setup associations
Conversation.hasMany(Message, { foreignKey: "conversationId" });
Message.belongsTo(Conversation, { foreignKey: "conversationId" });

// Optional: export in case needed elsewhere
export { Conversation, Message };

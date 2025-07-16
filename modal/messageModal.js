// models/Message.js
import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Message = sequelize.define('Message', {
  senderJid: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  receiverJid: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  message: {
    type: DataTypes.TEXT,
    defaultValue: '',
  },
  messageType: {
    type: DataTypes.ENUM('text', 'image', 'video', 'file'),
    defaultValue: 'text',
  },
  mediaUrl: {
    type: DataTypes.STRING,
  },
  mediaType: {
    type: DataTypes.STRING, // e.g., 'image', 'video'
  },
  isSeen: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  deletedFor: {
    type: DataTypes.ARRAY(DataTypes.STRING), // array of JIDs
    defaultValue: [],
  },
}, {
  timestamps: true,
});

export default Message;

// models/Conversation.js
import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Conversation = sequelize.define('Conversation', {
  participantJids: {
    type: DataTypes.ARRAY(DataTypes.STRING), // e.g., ['user1@localhost', 'user2@localhost']
    allowNull: false,
  },
  latestMessageId: {
    type: DataTypes.INTEGER,
    allowNull: true,
  }
}, {
  timestamps: true,
});

export default Conversation;

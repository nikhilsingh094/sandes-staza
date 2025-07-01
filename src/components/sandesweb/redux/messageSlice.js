import { createSlice } from '@reduxjs/toolkit';

const messageSlice = createSlice({
  name: 'messages',
  initialState: {
    chatMap: {}, // Structure: { [userJid]: [ { body, fromMe } ] }
  },
  reducers: {
    addMessage: (state, action) => {
      const { userJid, message } = action.payload;
      if (!state.chatMap[userJid]) {
        state.chatMap[userJid] = [];
      }
      state.chatMap[userJid].push(message);
    },
    clearMessages: (state, action) => {
  const userJid = action.payload;
  if (state.chatMap[userJid]) {
    state.chatMap[userJid] = [];
  }
},

deleteChat: (state, action) => {
  const userJid = action.payload;
  delete state.chatMap[userJid];
},

  },
});

export const { addMessage, clearMessages, deleteChat } = messageSlice.actions;
export default messageSlice.reducer;

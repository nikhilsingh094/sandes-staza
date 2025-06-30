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
  },
});

export const { addMessage } = messageSlice.actions;
export default messageSlice.reducer;

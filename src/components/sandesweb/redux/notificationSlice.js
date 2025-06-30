// chatSlice.js
import { createSlice } from '@reduxjs/toolkit';

const chatSlice = createSlice({
  name: 'noti',
  initialState: {
    notifications: [],
  },
  reducers: {
    addNotification: (state, action) => {
      const jid = action.payload;
      if (!state.notifications.includes(jid)) {
        state.notifications.push(jid);
      }
    },
    clearNotification: (state, action) => {
      state.notifications = state.notifications.filter((jid) => jid !== action.payload);
    },
  },
});

export const { addNotification, clearNotification } = chatSlice.actions;
export default chatSlice.reducer;
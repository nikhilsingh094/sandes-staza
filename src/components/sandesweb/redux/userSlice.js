import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  jid: null,
  password: null,
  selectedUser: null,
  presence: {}, 
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.jid = action.payload.jid;
      state.password = action.payload.password;
    },
    selectUser: (state, action) => {
      state.selectedUser = action.payload;
    },
    updatePresence: (state, action) => {
      const { jid, status } = action.payload;
      state.presence[jid] = status;
    },
    logout: (state) => {
      state.jid = null;
      state.password = null;
      state.selectedUser = null;
      state.presence = {};
    },
  },
});

export const { setCredentials, selectUser, updatePresence, logout } = userSlice.actions;
export default userSlice.reducer;


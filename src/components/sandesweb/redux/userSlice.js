import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  jid: null,
  password: null,
  selectedUser: null,
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
    logout: (state) => {
      state.jid = null;
      state.password = null;
      state.selectedUser = null;
    },
  },
});

export const { setCredentials, selectUser, logout } = userSlice.actions;
export default userSlice.reducer;

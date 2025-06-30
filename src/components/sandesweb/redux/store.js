import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import messageNotication from "./notificationSlice";
import messageReducer from "./messageSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    noti:messageNotication,
     messages: messageReducer,
  },
});
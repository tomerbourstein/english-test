import { configureStore } from "@reduxjs/toolkit";
import thunkMiddleware from "redux-thunk";
import chatSlice from "./chatSlice";

const store = configureStore({
  reducer: { chat: chatSlice.reducer },
  middleware: [thunkMiddleware],
});

export default store;

import { createSlice } from "@reduxjs/toolkit";
import { fetchChatCompletion } from "../utils/requests";

const initialState = {
  resultText: null,
  isLoading: false,
  error: null,
  category: "",
  isArticle: false,
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    saveCategory(state, action) {
      state.category = action.payload;
    },
    toggleDisplayArticle(state, action) {
      state.isArticle = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchChatCompletion.pending, (state) => {
        state.isLoading = true;
        state.resultText = null;
        state.error = null;
      })
      .addCase(fetchChatCompletion.fulfilled, (state, action) => {
        state.isLoading = false;
        state.resultText = action.payload;
      })
      .addCase(fetchChatCompletion.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});
export const chatActions = chatSlice.actions;
export default chatSlice;

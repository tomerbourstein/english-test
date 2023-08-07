import { createAsyncThunk } from "@reduxjs/toolkit";
import { Configuration, OpenAIApi } from "openai";
import { systemPrompt, userPrompt } from "../utils/prompts.js";
// import "dotenv/config";

// const apiUrl = "https://api.openai.com/v1/chat/completions";
const organization = "org-uPYB1wDSz4hcln91Znt6prFC";
// const apiKey = VITE_OPENAI_API_KEY;
const apiKey = "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";

const configuration = new Configuration({
  organization,
  apiKey,
});
delete configuration.baseOptions.headers["User-Agent"];
const openai = new OpenAIApi(configuration);

export const fetchChatCompletion = createAsyncThunk(
  "chat/fetchChatCompletion",
  async (category) => {
    try {
      const result = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content: String(systemPrompt(category)),
          },
          {
            role: "user",
            content: String(userPrompt),
          },
        ],
        temperature: 0.5,
        max_tokens: 3535,
      });

      const resultText = JSON.parse(result.data.choices[0].message.content);
      return resultText;
    } catch (error) {
      console.error("Error during API request:", error);
      throw error;
    }
  }
);

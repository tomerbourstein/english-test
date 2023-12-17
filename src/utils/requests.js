import OpenAI from "openai";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { systemPrompt, userPrompt } from "../utils/prompts.js";

// const chatSubject = "What is the weather in Tel-Aviv in celsius?";
// const chatContent = "Tell me how to dress out in this weather.";

const apiKey = import.meta.env.VITE_OPENAI_API_KEY;
const openai = new OpenAI({
  apiKey: apiKey, // This is also the default, can be omitted
  dangerouslyAllowBrowser: true,
});

export const fetchChatCompletion = createAsyncThunk(
  "chat/fetchChatCompletion",
  async (category) => {
    try {
      const result = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content: String(userPrompt),
          },
          {
            role: "user",
            content: String(systemPrompt(category)),
          },
        ],
        temperature: 0.5,
        max_tokens: 3535,
      });
      const resultText = result.choices[0].message.content;
      // console.log(resultText);
      // console.log(JSON.parse(resultText));
      return JSON.parse(resultText);
    } catch (error) {
      if (error instanceof OpenAI.APIError) {
        console.error(error.status); // e.g. 401
        console.error(error.message); // e.g. The authentication token you passed was invalid...
        console.error(error.code); // e.g. 'invalid_api_key'
        console.error(error.type); // e.g. 'invalid_request_error'
      } else {
        // Non-API error
        console.log("Error during API request:", error);
      }
      throw error;
    }
  }
);

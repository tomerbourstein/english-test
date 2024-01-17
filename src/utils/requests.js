import OpenAI from "openai";
import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  systemPrompt,
  userPrompt,
  userAnswersPrompt,
} from "../utils/prompts.js";

const apiKey = process.env.NEXT_PUBLIC_OPENAI_API_KEY;
const openai = new OpenAI({
  apiKey: apiKey,
  dangerouslyAllowBrowser: true,
});

const messagesWithUserAnswers = [];
export const fetchChatCompletion = createAsyncThunk(
  "chat/fetchChatCompletion",
  async ({ enteredCategory, testAnswers }) => {
    const messagesInitial = [
      {
        role: "system",
        content: String(systemPrompt),
      },
      {
        role: "user",
        content: String(userPrompt(enteredCategory)),
      },
    ];
    messagesWithUserAnswers.push(...messagesInitial);

    if (testAnswers) {
      messagesWithUserAnswers.push(
        {
          role: "user",
          content: String(userAnswersPrompt),
        },
        { role: "user", content: JSON.stringify(testAnswers) }
      );
    }

    try {
      const result = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: testAnswers ? messagesWithUserAnswers : messagesInitial,
        temperature: 0.5,
        // max_tokens: 3535,
      });

      const resultText = result.choices[0].message.content;
      messagesWithUserAnswers.push({ role: "assistant", content: resultText });

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

import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  systemPrompt,
  userPrompt,
  userAnswersPrompt,
} from "../utils/prompts.js";

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

    const requestMessages = testAnswers
      ? messagesWithUserAnswers
      : messagesInitial;

    const response = await fetch(
      `/english-test/api/chat`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ requestMessages }),
      }
    );

    const data = await response.json();
    if (response.status === 200) {
      messagesWithUserAnswers.push({
        role: "assistant",
        content: data.message,
      });

      return JSON.parse(data.message);
    } else {
      console.error(data.error);

      throw new Error(data.error);
    }
  }
);

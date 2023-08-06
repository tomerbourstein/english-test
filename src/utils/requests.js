import { Configuration, OpenAIApi } from "openai";
import { systemPrompt, userPrompt } from "../utils/prompts.js";
import "dotenv/config";

// const apiUrl = "https://api.openai.com/v1/chat/completions";
// const organization = "org-uPYB1wDSz4hcln91Znt6prFC";
const apiKey = process.env.OPENAI_API_KEY;

const configuration = new Configuration({
  // organization,
  apiKey,
});

const openai = new OpenAIApi(configuration);

const handleSubmitPrompt = async (systemPrompt, userPrompt) => {
  try {
    const result = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        {
          "role": "system",
          "content": String(systemPrompt)
        },
        {
          "role": "user",
          "content": String(userPrompt)
        }
      ],
      temperature: 0.5,
      max_tokens: 3535,
    });

    const resultText = result.data.choices[0].message.content;
    console.log(resultText);
    return resultText;
  } catch (error) {
    console.error("Error during API request:", error);
    throw error;
  }
};

handleSubmitPrompt(systemPrompt("the letter A"), userPrompt);

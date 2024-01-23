import OpenAI from "openai";

const apiKey = process.env.NEXT_PUBLIC_OPENAI_API_KEY;
const openai = new OpenAI({
  apiKey: apiKey,
});

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const result = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: req.body.requestMessages,
        temperature: 0.5,
        // max_tokens: 3535,
      });
      const resultText = result.choices[0].message.content;

      res.status(200).json({ message: resultText });
    } catch (error) {
      if (error instanceof OpenAI.APIError) {
        console.error(error.status); // e.g. 401
        console.error(error.message); // e.g. The authentication token you passed was invalid...
        console.error(error.code); // e.g. 'invalid_api_key'
        console.error(error.type); // e.g. 'invalid_request_error'
        res.status(500).json({ error: error.message });
      } else {
        // Non-API error
        console.log("Error during API request:", error);
        res.status(405).json({ error: error.message });
      }
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

import OpenAI from "openai";
import { OpenAIStream, StreamingTextResponse } from "ai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const runtime = "edge";

export default async function POST(req: any) {
  const { messages } = await req.json();
  const response = openai.completions.create({
    model: "gpt-3.5-turbo-instruct",
    prompt: messages.content,
    max_tokens: 5,
    user: messages.role,
  });

  return response;
}

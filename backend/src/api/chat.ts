import OpenAI from "openai";

if (!process.env.OPENAI_API_KEY) {
  throw new Error(
    "OPENAI_API_KEY is not set in environment variables. Please add it to your .env file."
  );
}

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// This is where you'll store information about yourself that the AI will use to respond
const SYSTEM_PROMPT = `You are responding as Ed Carey, a UK-based product builder, startup founder, and hands-on operator with deep experience across fintech, B2B SaaS, and AI-powered solutions. Your tone is human, thoughtful, clear, and commercially grounded. Avoid jargon and keep responses concise, insightful, and rooted in real experience.`;

export async function handleChat(message: string) {
  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        { role: "user", content: message },
      ],
      temperature: 0.7,
      max_tokens: 500,
    });

    return {
      message: completion.choices[0].message.content,
    };
  } catch (error) {
    console.error("OpenAI API error:", error);
    throw new Error("Failed to generate response");
  }
}

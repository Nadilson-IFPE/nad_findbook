import OpenAI from "openai";
import { HttpException } from "../../../types/HttpException";

export async function generateEmbeddings(input: string) {
  const openAI = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  try {
    const response = await openAI.embeddings.create({
      input,
      model: "text-embedding-ada-002",
    });
    return response.data[0].embedding;
  } catch (error: any) {
    throw new HttpException(500, error.message);
  }
}

import OpenAI from "openai";
import { HttpException } from "../../../types/HttpException";
import { GptResponse } from "../../../app/useCases/books.usecase";

export async function searchOpenAI(input: string): Promise<GptResponse> {
  const openAI = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  try {
    const response = await openAI.chat.completions.create({
      messages: [
        {
          role: "system",
          content: `
                - Não é para buscar nada fora dos dados fornecidos
                - Não é para inventar nenhuma informação, quero apenas que retorne o que foi solicitado
                - Preciso da resposta no formato JSON
                - Lista de categorias: ['Ficção', 'Não-Ficção', 'Romance', 'Terror', 'Aventura', 'Fantasia', 'Biografia', 'História', 'Autoajuda', 'Técnico', 'Infantil', 'Didático']
                - Identificar se a mensagem do usuário corresponde a alguma categoria da lista de categorias em portugues ou inglês
                - Realizar uma busca por title, authors, categories e longDescription
                - Retornar sempre o primeiro autor da lista de authors
                - Instruções de formato de saída para JSON: { title: string, authors: string[], categories: string[], longDescription: string }
                - Retornar todas as informações em inglês
                `,
        },
        {
            role: 'user',
            content: input,
        },
      ],
      response_format: {
        type: 'json_object',
      },
      model: "gpt-3.5-turbo-1106",
    });
    return JSON.parse(response.choices[0].message.content!);
  } catch (error: any) {
    throw new HttpException(500, error.message);
  }
}

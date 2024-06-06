import { z } from 'zod';

const bookSchema = z.object({
  title: z.string(),
  isbn: z.string(),
  pageCount: z.number(),
  publishedDate: z.object({
    $date: z.date(),
  }),
  thumbnailUrl: z.string(),
  shortDescription: z.string().optional(),
  longDescription: z.string().optional(),
  status: z.string(),
  authors: z.array(z.string()),
  categories: z.array(z.string()),
});

type Book = z.infer<typeof bookSchema>;

export type BookDto = Book;
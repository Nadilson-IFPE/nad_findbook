import mongoose from "mongoose";
import { BookDto } from "../../app/dto/bookDto";
import { BooksRepository } from "../../app/repository/books.repository";
import { BookEntity } from "../../domain/entity/book.entity";

const booksSchema = new mongoose.Schema({
  title: String,
  isbn: String,
  pageCount: Number,
  publishedDate: { $date: String },
  thumbnailUrl: String,
  shortDescription: String,
  longDescription: String,
  status: String,
  authors: [String],
  categories: [String],
});

const Books = mongoose.model("books", booksSchema);

class BooksRepositoryMongoose implements BooksRepository {
  
  create(dto: BookDto) {
    const books = new Books(dto);
    return books.save();
  }

  async find(dto: BookDto): Promise<BookEntity | null> {
    const response = await Books.findOne({ title: dto.title });
    return response ? response.toObject() : null;
  }

  async update(dto: BookDto, id: string): Promise<BookEntity | null> {
    const response = await Books.findByIdAndUpdate(id, dto);
    return response ? response.toObject() : null;
  }
}

export { BooksRepositoryMongoose, BooksRepository };

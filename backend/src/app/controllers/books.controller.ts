import { HttpRequest, HttpResponse } from '../../infra/http/httpAdapter';
import { BookDto } from '../dto/bookDto';
import { BooksUseCase } from '../useCases/books.usecase';

class BooksController {
  
  constructor(private readonly booksUseCase: BooksUseCase) {}

  async create(httpRequest: HttpRequest): Promise<HttpResponse> {
    const body: BookDto = httpRequest.body;

    try {
      const response = await this.booksUseCase.createBook(body);
      return {
        status: 201,
        message: 'Book created',
        data: response,
      };
    } catch (error: any) {
      return {
        status: 400,
        message: error.message,
      };
    }
  }

  async find(httpRequest: HttpRequest): Promise<HttpResponse> {
   // const dto: BookDto = httpRequest.query;
    const search: string = httpRequest.query.search;

    try {
      //const response = await this.booksUseCase.findBook(search);
      const response = await this.booksUseCase.searchBooks(search);
      return {
        status: 200,
        message: 'Book found',
        data: response,
      };
    } catch (error: any) {
      return {
        status: 400,
        message: error.message,
      };
    }
  }
  
  async update(httpRequest: HttpRequest): Promise<HttpResponse> {
    const dto: BookDto = httpRequest.body;
    const id: string = httpRequest.params.id;

    try {
      const response = await this.booksUseCase.updateBook(dto, id);
      return {
        status: 200,
        message: 'Book found',
        data: response,
      };
    } catch (error: any) {
      return {
        status: 400,
        message: error.message,
      };
    }
  }
}

export { BooksController };
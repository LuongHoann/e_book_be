import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { BookService } from './book.service';
import { CreateBookInput } from './dto/create-book.input';
import { UpdateBookInput } from './dto/update-book.input';
import { ResponseAPI } from '@/types/http.entity';
import { Book } from '@/modules/book/entities/book.entity';
import { HttpCode ,HttpStatus, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';


@Resolver(() => Book)
export class BookResolver {
  constructor(private readonly bookService: BookService ) {}

  @HttpCode(HttpStatus.CREATED)
  @UseInterceptors(FileInterceptor('file'))
  @Mutation(()=> ResponseAPI<Book>)
  createBook( @Args('createBookInput') createBookInput: CreateBookInput ) {
    return this.bookService.create(createBookInput);
  }

  @Query(()=> ResponseAPI<Book>, {name: 'findAllBooks'})
   findAll() {
    return this.bookService.findAll();
  }

  @Query(()=> ResponseAPI<Book>, {name: 'findBook'})
  findOne(@Args('id') id: string) {
    return this.bookService.findOne(id);
  }

  @HttpCode(HttpStatus.OK)
  @Mutation(() => ResponseAPI<Book>)
  updateBook(@Args('updateBookInput') updateBookInput: UpdateBookInput) {
    return this.bookService.update(updateBookInput.id, updateBookInput);
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Mutation(() => ResponseAPI<Book>)
  removeBook(@Args('id') id: string) {
    return this.bookService.remove(id);
  }
}

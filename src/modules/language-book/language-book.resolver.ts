import { ResponseAPI } from '@/types/http.entity';
import { Resolver, Mutation, Args} from '@nestjs/graphql';
import { LanguageBookService } from './language-book.service';
import { LanguageBook } from './entities/language-book.entity';
import { CreateLanguageBookInput } from './dto/create-language-book.input';
import { DeleteLanguageBookInput } from './dto/delete-language-book.input';

@Resolver(() => LanguageBook)
export class LanguageBookResolver {
  constructor(private readonly languageBookService: LanguageBookService) {}

  @Mutation(() => ResponseAPI<LanguageBook>)
  createLanguageBook(@Args('createLanguageBookInput') createLanguageBookInput: CreateLanguageBookInput) {
    return this.languageBookService.create(createLanguageBookInput);
  }

  @Mutation(() => ResponseAPI<LanguageBook>)
  removeLanguageBook(@Args('deleteLanguageBookInput') deleteLanguageBookInput:DeleteLanguageBookInput) {
    return this.languageBookService.remove(deleteLanguageBookInput);
  }
}

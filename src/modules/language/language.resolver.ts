import { ResponseAPI } from '@/types/http.entity';
import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { LanguageService } from './language.service';
import { Language } from './entities/language.entity';
import { CreateLanguageInput } from './dto/create-language.input';
import { UpdateLanguageInput } from './dto/update-language.input';

@Resolver(() => Language)
export class LanguageResolver {
  constructor(private readonly languageService: LanguageService) {}

  @Mutation(() => ResponseAPI<Language>)
  createLanguage(@Args('createLanguageInput') createLanguageInput: CreateLanguageInput) {
    return this.languageService.create(createLanguageInput);
  }

  @Query(() => ResponseAPI<Language>, { name: 'findAllLanguages' })
  findAll() {
    return this.languageService.findAll();
  }

  @Mutation(() => ResponseAPI<Language>)
  updateLanguage(@Args('updateLanguageInput') updateLanguageInput: UpdateLanguageInput) {
    return this.languageService.update(updateLanguageInput);
  }

  @Mutation(() => ResponseAPI<Language>)
  removeLanguage(@Args('id', { type: () => ID }) id: string) {
    return this.languageService.remove(id);
  }
}

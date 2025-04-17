import { ResponseAPI } from '@/types/http.entity';
import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
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

  @Query(() => ResponseAPI<Language>, { name: 'Languages' })
  findAll() {
    return this.languageService.findAll();
  }

  @Mutation(() => ResponseAPI<Language>)
  updateLanguage(@Args('updateLanguageInput') updateLanguageInput: UpdateLanguageInput) {
    return this.languageService.update(updateLanguageInput.id, updateLanguageInput);
  }

  @Mutation(() => ResponseAPI<Language>)
  removeLanguage(@Args('id', { type: () => Int }) id: number) {
    return this.languageService.remove(id);
  }
}

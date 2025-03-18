import { Book } from '@/modules/book/entities/book.entity';
import { Language } from '@/modules/language/entities/language.entity';
import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class LanguageBook {
  @Field(() => ID, {nullable: false})
  language_id:number

  @Field(()=> ID ,{ nullable: false})
  book_id: string

  @Field(()=>Book)
  book:Book

  @Field(()=>Language)
  language: Language
}

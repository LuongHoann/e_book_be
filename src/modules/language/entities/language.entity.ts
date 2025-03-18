import { Book } from '@/modules/book/entities/book.entity';
import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class Language {
  @Field(()=> ID)
  id: number;

  @Field(()=> String , {nullable: false})
  language_name: string;

  @Field(()=> String , {nullable: false})
  language_code: string

}

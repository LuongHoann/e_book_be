import { InputType, Field, ID } from '@nestjs/graphql';

@InputType()
export class CreateLanguageBookInput {
  [x: string]: any;
  @Field(() => ID, {nullable: false})
  language_id:number

  @Field(()=> ID ,{ nullable: false})
  book_id: string
}

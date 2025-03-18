import { InputType, Field, ID } from '@nestjs/graphql';

@InputType()
export class CreateShoppingCartInput {
  @Field(()=> ID , {nullable: false})
  user_id: string

  @Field(()=> ID , {nullable: false})
  book_id: string
}

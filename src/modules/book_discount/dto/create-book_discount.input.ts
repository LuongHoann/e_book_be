import { InputType, Int, Field, ID } from '@nestjs/graphql';

@InputType()
export class CreateBookDiscountInput {
  @Field(()=>ID)
  discount_id: number

  @Field(()=>ID)
  book_id: number
}

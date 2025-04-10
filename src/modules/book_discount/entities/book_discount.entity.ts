import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class BookDiscount {
  @Field(()=>ID)
  discount_id: number

  @Field(()=>ID)
  book_id: number
}

import { InputType, Int, Field, ID } from '@nestjs/graphql';

@InputType()
export class CreateReviewInput {
  @Field(()=>ID ,{nullable: false})
  book_id:  string

  @Field(()=>ID ,{nullable: false})
  user_id:  string

  @Field(()=>Int,{nullable: false})
  rating: number
}

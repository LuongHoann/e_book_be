import { CreateReviewInput } from './create-review.input';
import { InputType, Field, PartialType, ID } from '@nestjs/graphql';

@InputType()
export class UpdateReviewInput extends PartialType(CreateReviewInput) {
  @Field(()=>ID)
  bood_id:  string

  @Field(()=>ID)
  user_id:  string
}

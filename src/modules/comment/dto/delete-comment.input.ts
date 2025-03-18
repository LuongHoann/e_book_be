import { IsUUID } from 'class-validator';
import { CreateCommentInput } from './create-comment.input';
import { InputType, Field, PartialType, ID } from '@nestjs/graphql';

@InputType()
export class DeleteCommentInput extends PartialType(CreateCommentInput) {
  @Field(() => ID)
  @IsUUID()
  book_id: string

  @Field(() => ID)
  @IsUUID()
  user_id: string
}

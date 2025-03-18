import { CreateReadingHistoryInput } from './create-reading_history.input';
import { InputType, Field, PartialType, ID } from '@nestjs/graphql';

@InputType()
export class UpdateReadingHistoryInput extends PartialType(CreateReadingHistoryInput) {
  @Field(()=>ID)
  user_id: string

  @Field(()=>ID)
  book_id: string
}

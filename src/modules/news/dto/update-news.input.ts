import { CreateNewsInput } from './create-news.input';
import { InputType, Field, PartialType, Int } from '@nestjs/graphql';

@InputType()
export class UpdateNewsInput extends PartialType(CreateNewsInput) {
  @Field(() => Int)
  id: number;
}

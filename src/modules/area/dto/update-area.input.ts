import { CreateAreaInput } from './create-area.input';
import { Field, InputType, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateAreaInput extends PartialType(CreateAreaInput) {
  @Field()
  area_name: string;
}

import { Field, ID, InputType } from '@nestjs/graphql';
import { CreateBookInput } from './create-book.input';
import { PartialType } from '@nestjs/mapped-types';

@InputType()
export class UpdateBookInput extends PartialType(CreateBookInput) {
  @Field(()=> ID)
  id: string;
}

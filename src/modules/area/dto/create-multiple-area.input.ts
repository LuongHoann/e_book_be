import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';
import { CreateAreaInput } from './create-area.input';

@InputType()
export class CreateMultipleAreaInput {
  @Field(() => [CreateAreaInput])
  @IsNotEmpty()
  areas: CreateAreaInput[];
}

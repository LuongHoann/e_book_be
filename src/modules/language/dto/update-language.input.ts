import { CreateLanguageInput } from './create-language.input';
import { InputType, Field , PartialType, ID } from '@nestjs/graphql';

@InputType()
export class UpdateLanguageInput extends PartialType(CreateLanguageInput) {
  @Field(() => ID)
  id: string;
}

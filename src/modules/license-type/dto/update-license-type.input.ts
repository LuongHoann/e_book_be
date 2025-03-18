import { CreateLicenseTypeInput } from './create-license-type.input';
import { InputType, Field, Int, PartialType, ID } from '@nestjs/graphql';

@InputType()
export class UpdateLicenseTypeInput extends PartialType(CreateLicenseTypeInput) {
  @Field(() => ID)
  id: string;
}

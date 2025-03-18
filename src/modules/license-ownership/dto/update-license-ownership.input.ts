import { CreateLicenseOwnershipInput } from './create-license-ownership.input';
import { InputType, Field, Int, PartialType, ID } from '@nestjs/graphql';

@InputType()
export class UpdateLicenseOwnershipInput extends PartialType(CreateLicenseOwnershipInput) {
  @Field(()=> ID , {nullable: false})
  id: number
}

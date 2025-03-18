import { InputType, ID, Field } from '@nestjs/graphql';

@InputType()
export class CreateLicenseInput {
  @Field(()=> String ,{nullable : false})
  license_name: string

  @Field(()=> ID, {nullable : false})
  bood_id: string

  @Field(()=> ID , {nullable: false})
  license_type_id: string
}

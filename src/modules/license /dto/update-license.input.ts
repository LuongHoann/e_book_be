import { InputType, Field, ID } from '@nestjs/graphql';

@InputType()
export class UpdateLicenseInput {
  @Field(()=> ID ,{nullable : false})
  id: string

  @Field(()=> ID ,{nullable : true})
  license_name?: string 
}

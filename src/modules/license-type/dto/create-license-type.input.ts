import { InputType, Int, Field, Float } from '@nestjs/graphql';

@InputType()
export class CreateLicenseTypeInput {
  @Field(() => String, { nullable: true})
  license_type_name: string

  @Field(()=> Int)
  download_count: number

  @Field(()=>Float)
  price: number

  @Field(()=>Boolean)
  status: boolean

  @Field(()=> String , { nullable: false})
  expiration_date: string

}

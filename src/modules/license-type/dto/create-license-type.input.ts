import { InputType, Int, Field, Float } from '@nestjs/graphql';

@InputType()
export class CreateLicenseTypeInput {
  @Field(() => String, { nullable: false})
  name: string

  @Field(()=> Int, { nullable: false})
  download_count: number

  @Field(()=>Float)
  price: number

  @Field(()=>Boolean)
  status: boolean

  @Field(()=> Int , { nullable: false})
  duration: number

}

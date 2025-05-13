import { InputType, Field, Float, Int } from '@nestjs/graphql';

@InputType()
export class CreateDiscountCodeInput {
  @Field(() => String)
  name: string

  @Field(()=> Float)
  value: number

  @Field(()=> Int)
  value_percent: number

  @Field(()=>String)
  area_name: string 
}

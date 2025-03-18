import { InputType, Field, Float, Int } from '@nestjs/graphql';

@InputType()
export class CreateDiscountCodeInput {
  @Field(() => String)
  discount_code_name: string

  @Field(()=> Float)
  discount_value: number

  @Field(()=> Int)
  discount_value_percent: number

  @Field(()=>String)
  area_name: string 
}

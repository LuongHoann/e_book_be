import { Area } from '@/modules/area/entities/area.entity';
import { Field, Float, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class DiscountCode {
  @Field(() => Int, { nullable: false })
  id: number; 

  @Field(() => String)
  discount_code_name: string

  @Field(()=> Float)
  discount_value: number

  @Field(()=> Int)
  discount_value_percent: number

  @Field(()=>String)
  area_name: string 

  @Field(()=> Area)
  area?: Area
}

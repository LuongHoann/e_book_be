import { DiscountCode } from '@/modules/discount-code/entities/discount-code.entity';
import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType('area')
export class Area {
  @Field(() => String, { nullable: false })
  area_name: string;

  @Field(()=>[DiscountCode], { nullable : "itemsAndList"})
  discountCodes?: DiscountCode[];
}

import { DiscountCode } from '@/modules/discount-code/entities/discount-code.entity';
import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType('area')
export class Area {
  @Field(() => String, { nullable: false })
  name: string;

  @Field(()=>String , {nullable:false})
  code: string;

  @Field(()=>String, {nullable: true})
  description: string | null;

  @Field(()=>[DiscountCode], { nullable : "itemsAndList"})
  discountCodes?: DiscountCode[];
}

import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { discount_code } from '../discount-code/discount-code.model';
import { AreaCount } from '../prisma/area-count.output';

@ObjectType()
export class area {

    @Field(() => ID, {nullable:false})
    area_name!: string;

    @Field(() => [discount_code], {nullable:true})
    discount_code?: Array<discount_code>;

    @Field(() => AreaCount, {nullable:false})
    _count?: AreaCount;
}

import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Discount_codeCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    discount_code_name!: number;

    @Field(() => Int, {nullable:false})
    discount_value!: number;

    @Field(() => Int, {nullable:false})
    discount_value_percent!: number;

    @Field(() => Int, {nullable:false})
    area_code!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}

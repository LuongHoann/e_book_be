import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';

@ObjectType()
export class Discount_codeMinAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    discount_code_name?: string;

    @Field(() => GraphQLDecimal, {nullable:true})
    discount_value?: Decimal;

    @Field(() => Int, {nullable:true})
    discount_value_percent?: number;

    @Field(() => String, {nullable:true})
    area_name?: string;
}

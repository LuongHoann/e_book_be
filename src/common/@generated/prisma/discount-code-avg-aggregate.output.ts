import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';

@ObjectType()
export class Discount_codeAvgAggregate {

    @Field(() => Float, {nullable:true})
    id?: number;

    @Field(() => GraphQLDecimal, {nullable:true})
    discount_value?: Decimal;

    @Field(() => Float, {nullable:true})
    discount_value_percent?: number;
}

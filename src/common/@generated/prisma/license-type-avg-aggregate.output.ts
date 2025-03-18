import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';

@ObjectType()
export class License_typeAvgAggregate {

    @Field(() => Float, {nullable:true})
    download_count?: number;

    @Field(() => GraphQLDecimal, {nullable:true})
    price?: Decimal;
}

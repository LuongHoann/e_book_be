import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { License_typeCountAggregate } from './license-type-count-aggregate.output';
import { License_typeAvgAggregate } from './license-type-avg-aggregate.output';
import { License_typeSumAggregate } from './license-type-sum-aggregate.output';
import { License_typeMinAggregate } from './license-type-min-aggregate.output';
import { License_typeMaxAggregate } from './license-type-max-aggregate.output';

@ObjectType()
export class License_typeGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Int, {nullable:false})
    download_count!: number;

    @Field(() => GraphQLDecimal, {nullable:false})
    price!: Decimal;

    @Field(() => Boolean, {nullable:false})
    status!: boolean;

    @Field(() => Date, {nullable:true})
    expiration_date?: Date | string;

    @Field(() => License_typeCountAggregate, {nullable:true})
    _count?: License_typeCountAggregate;

    @Field(() => License_typeAvgAggregate, {nullable:true})
    _avg?: License_typeAvgAggregate;

    @Field(() => License_typeSumAggregate, {nullable:true})
    _sum?: License_typeSumAggregate;

    @Field(() => License_typeMinAggregate, {nullable:true})
    _min?: License_typeMinAggregate;

    @Field(() => License_typeMaxAggregate, {nullable:true})
    _max?: License_typeMaxAggregate;
}

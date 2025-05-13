import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { Decimal } from '@prisma/client/runtime/library';
import { license } from '../license/license.model';
import { License_typeCount } from '../prisma/license-type-count.output';

@ObjectType()
export class license_type {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Int, {nullable:false})
    download_count!: number;

    @Field(() => GraphQLDecimal, {nullable:false})
    price!: Decimal;

    @Field(() => Boolean, {nullable:false})
    status!: boolean;

    @Field(() => Int, {nullable:true})
    duration!: number | null;

    @Field(() => [license], {nullable:true})
    license?: Array<license>;

    @Field(() => License_typeCount, {nullable:false})
    _count?: License_typeCount;
}

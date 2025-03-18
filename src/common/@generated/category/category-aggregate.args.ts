import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { categoryWhereInput } from './category-where.input';
import { Type } from 'class-transformer';
import { categoryOrderByWithRelationInput } from './category-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { categoryWhereUniqueInput } from './category-where-unique.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class categoryAggregateArgs {

    @Field(() => categoryWhereInput, {nullable:true})
    @Type(() => categoryWhereInput)
    where?: categoryWhereInput;

    @Field(() => [categoryOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<categoryOrderByWithRelationInput>;

    @Field(() => categoryWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<categoryWhereUniqueInput, 'name'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}

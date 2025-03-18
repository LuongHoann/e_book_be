import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { newsWhereInput } from './news-where.input';
import { Type } from 'class-transformer';
import { newsOrderByWithRelationInput } from './news-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { newsWhereUniqueInput } from './news-where-unique.input';
import { Int } from '@nestjs/graphql';
import { NewsScalarFieldEnum } from '../prisma/news-scalar-field.enum';

@ArgsType()
export class FindManynewsArgs {

    @Field(() => newsWhereInput, {nullable:true})
    @Type(() => newsWhereInput)
    where?: newsWhereInput;

    @Field(() => [newsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<newsOrderByWithRelationInput>;

    @Field(() => newsWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<newsWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [NewsScalarFieldEnum], {nullable:true})
    distinct?: Array<`${NewsScalarFieldEnum}`>;
}

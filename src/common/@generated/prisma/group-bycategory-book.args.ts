import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { category_bookWhereInput } from '../category-book/category-book-where.input';
import { Type } from 'class-transformer';
import { category_bookOrderByWithAggregationInput } from '../category-book/category-book-order-by-with-aggregation.input';
import { Category_bookScalarFieldEnum } from './category-book-scalar-field.enum';
import { category_bookScalarWhereWithAggregatesInput } from '../category-book/category-book-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupBycategoryBookArgs {

    @Field(() => category_bookWhereInput, {nullable:true})
    @Type(() => category_bookWhereInput)
    where?: category_bookWhereInput;

    @Field(() => [category_bookOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<category_bookOrderByWithAggregationInput>;

    @Field(() => [Category_bookScalarFieldEnum], {nullable:false})
    by!: Array<`${Category_bookScalarFieldEnum}`>;

    @Field(() => category_bookScalarWhereWithAggregatesInput, {nullable:true})
    having?: category_bookScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}

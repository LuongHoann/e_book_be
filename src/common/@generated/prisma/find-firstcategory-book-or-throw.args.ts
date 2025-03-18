import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { category_bookWhereInput } from '../category-book/category-book-where.input';
import { Type } from 'class-transformer';
import { category_bookOrderByWithRelationInput } from '../category-book/category-book-order-by-with-relation.input';
import { category_bookWhereUniqueInput } from '../category-book/category-book-where-unique.input';
import { Int } from '@nestjs/graphql';
import { Category_bookScalarFieldEnum } from './category-book-scalar-field.enum';

@ArgsType()
export class FindFirstcategoryBookOrThrowArgs {

    @Field(() => category_bookWhereInput, {nullable:true})
    @Type(() => category_bookWhereInput)
    where?: category_bookWhereInput;

    @Field(() => [category_bookOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<category_bookOrderByWithRelationInput>;

    @Field(() => category_bookWhereUniqueInput, {nullable:true})
    cursor?: category_bookWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [Category_bookScalarFieldEnum], {nullable:true})
    distinct?: Array<`${Category_bookScalarFieldEnum}`>;
}

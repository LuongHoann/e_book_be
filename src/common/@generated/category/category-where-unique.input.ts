import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { categoryWhereInput } from './category-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { Category_bookListRelationFilter } from '../prisma/category-book-list-relation-filter.input';

@InputType()
export class categoryWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => [categoryWhereInput], {nullable:true})
    AND?: Array<categoryWhereInput>;

    @Field(() => [categoryWhereInput], {nullable:true})
    OR?: Array<categoryWhereInput>;

    @Field(() => [categoryWhereInput], {nullable:true})
    NOT?: Array<categoryWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    description?: StringFilter;

    @Field(() => Category_bookListRelationFilter, {nullable:true})
    category_book?: Category_bookListRelationFilter;
}

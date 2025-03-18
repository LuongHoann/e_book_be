import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { category_bookWhereInput } from '../category-book/category-book-where.input';

@InputType()
export class Category_bookListRelationFilter {

    @Field(() => category_bookWhereInput, {nullable:true})
    every?: category_bookWhereInput;

    @Field(() => category_bookWhereInput, {nullable:true})
    some?: category_bookWhereInput;

    @Field(() => category_bookWhereInput, {nullable:true})
    none?: category_bookWhereInput;
}

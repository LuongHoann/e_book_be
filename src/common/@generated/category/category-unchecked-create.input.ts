import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { category_bookUncheckedCreateNestedManyWithoutCategoryInput } from '../category-book/category-book-unchecked-create-nested-many-without-category.input';

@InputType()
export class categoryUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => category_bookUncheckedCreateNestedManyWithoutCategoryInput, {nullable:true})
    category_book?: category_bookUncheckedCreateNestedManyWithoutCategoryInput;
}

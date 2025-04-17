import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { category_bookCreateNestedManyWithoutCategoryInput } from '../category-book/category-book-create-nested-many-without-category.input';

@InputType()
export class categoryCreateInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => category_bookCreateNestedManyWithoutCategoryInput, {nullable:true})
    category_book?: category_bookCreateNestedManyWithoutCategoryInput;
}

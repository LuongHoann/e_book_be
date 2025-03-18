import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { category_bookCreateNestedManyWithoutCategory_category_book_categoryTocategoryInput } from '../category-book/category-book-create-nested-many-without-category-category-book-category-tocategory.input';

@InputType()
export class categoryCreateInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => category_bookCreateNestedManyWithoutCategory_category_book_categoryTocategoryInput, {nullable:true})
    category_book_category_book_categoryTocategory?: category_bookCreateNestedManyWithoutCategory_category_book_categoryTocategoryInput;
}

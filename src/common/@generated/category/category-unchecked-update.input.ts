import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { category_bookUncheckedUpdateManyWithoutCategory_category_book_categoryTocategoryNestedInput } from '../category-book/category-book-unchecked-update-many-without-category-category-book-category-tocategory-nested.input';

@InputType()
export class categoryUncheckedUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => category_bookUncheckedUpdateManyWithoutCategory_category_book_categoryTocategoryNestedInput, {nullable:true})
    category_book_category_book_categoryTocategory?: category_bookUncheckedUpdateManyWithoutCategory_category_book_categoryTocategoryNestedInput;
}

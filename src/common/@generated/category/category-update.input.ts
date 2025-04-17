import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { category_bookUpdateManyWithoutCategoryNestedInput } from '../category-book/category-book-update-many-without-category-nested.input';

@InputType()
export class categoryUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    description?: StringFieldUpdateOperationsInput;

    @Field(() => category_bookUpdateManyWithoutCategoryNestedInput, {nullable:true})
    category_book?: category_bookUpdateManyWithoutCategoryNestedInput;
}

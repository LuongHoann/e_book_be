import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { category_bookUncheckedUpdateManyWithoutCategoryNestedInput } from '../category-book/category-book-unchecked-update-many-without-category-nested.input';

@InputType()
export class categoryUncheckedUpdateInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    description?: StringFieldUpdateOperationsInput;

    @Field(() => category_bookUncheckedUpdateManyWithoutCategoryNestedInput, {nullable:true})
    category_book?: category_bookUncheckedUpdateManyWithoutCategoryNestedInput;
}

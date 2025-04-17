import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';

@InputType()
export class category_bookUncheckedUpdateWithoutCategoryInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    book_id?: StringFieldUpdateOperationsInput;
}

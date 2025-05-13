import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { language_bookUpdateManyWithoutLanguageNestedInput } from '../language-book/language-book-update-many-without-language-nested.input';

@InputType()
export class languageUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    code?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    native_name?: StringFieldUpdateOperationsInput;

    @Field(() => language_bookUpdateManyWithoutLanguageNestedInput, {nullable:true})
    language_book?: language_bookUpdateManyWithoutLanguageNestedInput;
}

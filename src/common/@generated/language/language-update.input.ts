import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { language_bookUpdateManyWithoutLanguageNestedInput } from '../language-book/language-book-update-many-without-language-nested.input';

@InputType()
export class languageUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    language_name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    language_code?: StringFieldUpdateOperationsInput;

    @Field(() => language_bookUpdateManyWithoutLanguageNestedInput, {nullable:true})
    language_book?: language_bookUpdateManyWithoutLanguageNestedInput;
}

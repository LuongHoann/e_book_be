import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { language_bookUncheckedUpdateManyWithoutLanguageNestedInput } from '../language-book/language-book-unchecked-update-many-without-language-nested.input';

@InputType()
export class languageUncheckedUpdateInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    code?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    native_name?: StringFieldUpdateOperationsInput;

    @Field(() => language_bookUncheckedUpdateManyWithoutLanguageNestedInput, {nullable:true})
    language_book?: language_bookUncheckedUpdateManyWithoutLanguageNestedInput;
}

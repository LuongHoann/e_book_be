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
    language_name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    language_code?: StringFieldUpdateOperationsInput;

    @Field(() => language_bookUncheckedUpdateManyWithoutLanguageNestedInput, {nullable:true})
    language_book?: language_bookUncheckedUpdateManyWithoutLanguageNestedInput;
}

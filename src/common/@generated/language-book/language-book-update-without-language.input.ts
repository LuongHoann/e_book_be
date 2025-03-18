import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { bookUpdateOneRequiredWithoutLanguage_bookNestedInput } from '../book/book-update-one-required-without-language-book-nested.input';
import { Type } from 'class-transformer';

@InputType()
export class language_bookUpdateWithoutLanguageInput {

    @Field(() => bookUpdateOneRequiredWithoutLanguage_bookNestedInput, {nullable:true})
    @Type(() => bookUpdateOneRequiredWithoutLanguage_bookNestedInput)
    book?: bookUpdateOneRequiredWithoutLanguage_bookNestedInput;
}

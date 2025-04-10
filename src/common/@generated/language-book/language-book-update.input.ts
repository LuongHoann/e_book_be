import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { bookUpdateOneRequiredWithoutLanguage_bookNestedInput } from '../book/book-update-one-required-without-language-book-nested.input';
import { languageUpdateOneRequiredWithoutLanguage_bookNestedInput } from '../language/language-update-one-required-without-language-book-nested.input';

@InputType()
export class language_bookUpdateInput {

    @Field(() => bookUpdateOneRequiredWithoutLanguage_bookNestedInput, {nullable:true})
    book?: bookUpdateOneRequiredWithoutLanguage_bookNestedInput;

    @Field(() => languageUpdateOneRequiredWithoutLanguage_bookNestedInput, {nullable:true})
    language?: languageUpdateOneRequiredWithoutLanguage_bookNestedInput;
}

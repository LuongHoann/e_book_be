import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languageUpdateOneRequiredWithoutLanguage_bookNestedInput } from '../language/language-update-one-required-without-language-book-nested.input';

@InputType()
export class language_bookUpdateWithoutBookInput {

    @Field(() => languageUpdateOneRequiredWithoutLanguage_bookNestedInput, {nullable:true})
    language?: languageUpdateOneRequiredWithoutLanguage_bookNestedInput;
}

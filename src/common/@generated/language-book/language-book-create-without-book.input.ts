import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languageCreateNestedOneWithoutLanguage_bookInput } from '../language/language-create-nested-one-without-language-book.input';

@InputType()
export class language_bookCreateWithoutBookInput {

    @Field(() => languageCreateNestedOneWithoutLanguage_bookInput, {nullable:false})
    language!: languageCreateNestedOneWithoutLanguage_bookInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { bookCreateNestedOneWithoutLanguage_bookInput } from '../book/book-create-nested-one-without-language-book.input';
import { languageCreateNestedOneWithoutLanguage_bookInput } from '../language/language-create-nested-one-without-language-book.input';

@InputType()
export class language_bookCreateInput {

    @Field(() => bookCreateNestedOneWithoutLanguage_bookInput, {nullable:false})
    book!: bookCreateNestedOneWithoutLanguage_bookInput;

    @Field(() => languageCreateNestedOneWithoutLanguage_bookInput, {nullable:false})
    language!: languageCreateNestedOneWithoutLanguage_bookInput;
}

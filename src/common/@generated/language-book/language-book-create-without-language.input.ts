import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { bookCreateNestedOneWithoutLanguage_bookInput } from '../book/book-create-nested-one-without-language-book.input';

@InputType()
export class language_bookCreateWithoutLanguageInput {

    @Field(() => bookCreateNestedOneWithoutLanguage_bookInput, {nullable:false})
    book!: bookCreateNestedOneWithoutLanguage_bookInput;
}

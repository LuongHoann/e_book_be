import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { bookCreateNestedOneWithoutLanguage_bookInput } from '../book/book-create-nested-one-without-language-book.input';
import { Type } from 'class-transformer';

@InputType()
export class language_bookCreateWithoutLanguageInput {

    @Field(() => bookCreateNestedOneWithoutLanguage_bookInput, {nullable:false})
    @Type(() => bookCreateNestedOneWithoutLanguage_bookInput)
    book!: bookCreateNestedOneWithoutLanguage_bookInput;
}

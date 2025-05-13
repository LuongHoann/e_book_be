import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { language_bookCreateNestedManyWithoutLanguageInput } from '../language-book/language-book-create-nested-many-without-language.input';

@InputType()
export class languageCreateInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    code!: string;

    @Field(() => String, {nullable:false})
    native_name!: string;

    @Field(() => language_bookCreateNestedManyWithoutLanguageInput, {nullable:true})
    language_book?: language_bookCreateNestedManyWithoutLanguageInput;
}

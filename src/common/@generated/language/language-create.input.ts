import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { language_bookCreateNestedManyWithoutLanguageInput } from '../language-book/language-book-create-nested-many-without-language.input';

@InputType()
export class languageCreateInput {

    @Field(() => String, {nullable:false})
    language_name!: string;

    @Field(() => String, {nullable:false})
    language_code!: string;

    @Field(() => language_bookCreateNestedManyWithoutLanguageInput, {nullable:true})
    language_book?: language_bookCreateNestedManyWithoutLanguageInput;
}

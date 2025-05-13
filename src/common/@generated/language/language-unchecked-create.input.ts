import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { language_bookUncheckedCreateNestedManyWithoutLanguageInput } from '../language-book/language-book-unchecked-create-nested-many-without-language.input';

@InputType()
export class languageUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    code!: string;

    @Field(() => String, {nullable:false})
    native_name!: string;

    @Field(() => language_bookUncheckedCreateNestedManyWithoutLanguageInput, {nullable:true})
    language_book?: language_bookUncheckedCreateNestedManyWithoutLanguageInput;
}

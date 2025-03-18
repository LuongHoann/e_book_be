import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class languageCreateWithoutLanguage_bookInput {

    @Field(() => String, {nullable:false})
    language_name!: string;

    @Field(() => String, {nullable:false})
    language_code!: string;
}

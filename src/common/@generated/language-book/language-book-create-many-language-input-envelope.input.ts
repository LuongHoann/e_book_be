import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { language_bookCreateManyLanguageInput } from './language-book-create-many-language.input';
import { Type } from 'class-transformer';

@InputType()
export class language_bookCreateManyLanguageInputEnvelope {

    @Field(() => [language_bookCreateManyLanguageInput], {nullable:false})
    @Type(() => language_bookCreateManyLanguageInput)
    data!: Array<language_bookCreateManyLanguageInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

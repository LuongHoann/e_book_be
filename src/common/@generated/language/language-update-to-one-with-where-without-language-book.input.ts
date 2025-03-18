import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languageWhereInput } from './language-where.input';
import { Type } from 'class-transformer';
import { languageUpdateWithoutLanguage_bookInput } from './language-update-without-language-book.input';

@InputType()
export class languageUpdateToOneWithWhereWithoutLanguage_bookInput {

    @Field(() => languageWhereInput, {nullable:true})
    @Type(() => languageWhereInput)
    where?: languageWhereInput;

    @Field(() => languageUpdateWithoutLanguage_bookInput, {nullable:false})
    @Type(() => languageUpdateWithoutLanguage_bookInput)
    data!: languageUpdateWithoutLanguage_bookInput;
}

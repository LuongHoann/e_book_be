import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languageUpdateWithoutLanguage_bookInput } from './language-update-without-language-book.input';
import { Type } from 'class-transformer';
import { languageCreateWithoutLanguage_bookInput } from './language-create-without-language-book.input';
import { languageWhereInput } from './language-where.input';

@InputType()
export class languageUpsertWithoutLanguage_bookInput {

    @Field(() => languageUpdateWithoutLanguage_bookInput, {nullable:false})
    @Type(() => languageUpdateWithoutLanguage_bookInput)
    update!: languageUpdateWithoutLanguage_bookInput;

    @Field(() => languageCreateWithoutLanguage_bookInput, {nullable:false})
    @Type(() => languageCreateWithoutLanguage_bookInput)
    create!: languageCreateWithoutLanguage_bookInput;

    @Field(() => languageWhereInput, {nullable:true})
    @Type(() => languageWhereInput)
    where?: languageWhereInput;
}

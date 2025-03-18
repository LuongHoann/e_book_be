import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { languageWhereUniqueInput } from './language-where-unique.input';
import { Type } from 'class-transformer';
import { languageCreateWithoutLanguage_bookInput } from './language-create-without-language-book.input';

@InputType()
export class languageCreateOrConnectWithoutLanguage_bookInput {

    @Field(() => languageWhereUniqueInput, {nullable:false})
    @Type(() => languageWhereUniqueInput)
    where!: Prisma.AtLeast<languageWhereUniqueInput, 'id' | 'language_code'>;

    @Field(() => languageCreateWithoutLanguage_bookInput, {nullable:false})
    @Type(() => languageCreateWithoutLanguage_bookInput)
    create!: languageCreateWithoutLanguage_bookInput;
}

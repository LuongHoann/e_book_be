import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { language_bookWhereUniqueInput } from './language-book-where-unique.input';
import { Type } from 'class-transformer';
import { language_bookUpdateWithoutLanguageInput } from './language-book-update-without-language.input';

@InputType()
export class language_bookUpdateWithWhereUniqueWithoutLanguageInput {

    @Field(() => language_bookWhereUniqueInput, {nullable:false})
    @Type(() => language_bookWhereUniqueInput)
    where!: Prisma.AtLeast<language_bookWhereUniqueInput, 'language_id_book_id'>;

    @Field(() => language_bookUpdateWithoutLanguageInput, {nullable:false})
    @Type(() => language_bookUpdateWithoutLanguageInput)
    data!: language_bookUpdateWithoutLanguageInput;
}

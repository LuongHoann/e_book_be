import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { language_bookCreateWithoutLanguageInput } from './language-book-create-without-language.input';
import { Type } from 'class-transformer';
import { language_bookCreateOrConnectWithoutLanguageInput } from './language-book-create-or-connect-without-language.input';
import { language_bookCreateManyLanguageInputEnvelope } from './language-book-create-many-language-input-envelope.input';
import { Prisma } from '@prisma/client';
import { language_bookWhereUniqueInput } from './language-book-where-unique.input';

@InputType()
export class language_bookUncheckedCreateNestedManyWithoutLanguageInput {

    @Field(() => [language_bookCreateWithoutLanguageInput], {nullable:true})
    @Type(() => language_bookCreateWithoutLanguageInput)
    create?: Array<language_bookCreateWithoutLanguageInput>;

    @Field(() => [language_bookCreateOrConnectWithoutLanguageInput], {nullable:true})
    @Type(() => language_bookCreateOrConnectWithoutLanguageInput)
    connectOrCreate?: Array<language_bookCreateOrConnectWithoutLanguageInput>;

    @Field(() => language_bookCreateManyLanguageInputEnvelope, {nullable:true})
    @Type(() => language_bookCreateManyLanguageInputEnvelope)
    createMany?: language_bookCreateManyLanguageInputEnvelope;

    @Field(() => [language_bookWhereUniqueInput], {nullable:true})
    @Type(() => language_bookWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<language_bookWhereUniqueInput, 'language_id_book_id'>>;
}

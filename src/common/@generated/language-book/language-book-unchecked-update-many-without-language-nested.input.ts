import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { language_bookCreateWithoutLanguageInput } from './language-book-create-without-language.input';
import { Type } from 'class-transformer';
import { language_bookCreateOrConnectWithoutLanguageInput } from './language-book-create-or-connect-without-language.input';
import { language_bookUpsertWithWhereUniqueWithoutLanguageInput } from './language-book-upsert-with-where-unique-without-language.input';
import { language_bookCreateManyLanguageInputEnvelope } from './language-book-create-many-language-input-envelope.input';
import { Prisma } from '@prisma/client';
import { language_bookWhereUniqueInput } from './language-book-where-unique.input';
import { language_bookUpdateWithWhereUniqueWithoutLanguageInput } from './language-book-update-with-where-unique-without-language.input';
import { language_bookUpdateManyWithWhereWithoutLanguageInput } from './language-book-update-many-with-where-without-language.input';
import { language_bookScalarWhereInput } from './language-book-scalar-where.input';

@InputType()
export class language_bookUncheckedUpdateManyWithoutLanguageNestedInput {

    @Field(() => [language_bookCreateWithoutLanguageInput], {nullable:true})
    @Type(() => language_bookCreateWithoutLanguageInput)
    create?: Array<language_bookCreateWithoutLanguageInput>;

    @Field(() => [language_bookCreateOrConnectWithoutLanguageInput], {nullable:true})
    @Type(() => language_bookCreateOrConnectWithoutLanguageInput)
    connectOrCreate?: Array<language_bookCreateOrConnectWithoutLanguageInput>;

    @Field(() => [language_bookUpsertWithWhereUniqueWithoutLanguageInput], {nullable:true})
    @Type(() => language_bookUpsertWithWhereUniqueWithoutLanguageInput)
    upsert?: Array<language_bookUpsertWithWhereUniqueWithoutLanguageInput>;

    @Field(() => language_bookCreateManyLanguageInputEnvelope, {nullable:true})
    @Type(() => language_bookCreateManyLanguageInputEnvelope)
    createMany?: language_bookCreateManyLanguageInputEnvelope;

    @Field(() => [language_bookWhereUniqueInput], {nullable:true})
    @Type(() => language_bookWhereUniqueInput)
    set?: Array<Prisma.AtLeast<language_bookWhereUniqueInput, 'language_id_book_id'>>;

    @Field(() => [language_bookWhereUniqueInput], {nullable:true})
    @Type(() => language_bookWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<language_bookWhereUniqueInput, 'language_id_book_id'>>;

    @Field(() => [language_bookWhereUniqueInput], {nullable:true})
    @Type(() => language_bookWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<language_bookWhereUniqueInput, 'language_id_book_id'>>;

    @Field(() => [language_bookWhereUniqueInput], {nullable:true})
    @Type(() => language_bookWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<language_bookWhereUniqueInput, 'language_id_book_id'>>;

    @Field(() => [language_bookUpdateWithWhereUniqueWithoutLanguageInput], {nullable:true})
    @Type(() => language_bookUpdateWithWhereUniqueWithoutLanguageInput)
    update?: Array<language_bookUpdateWithWhereUniqueWithoutLanguageInput>;

    @Field(() => [language_bookUpdateManyWithWhereWithoutLanguageInput], {nullable:true})
    @Type(() => language_bookUpdateManyWithWhereWithoutLanguageInput)
    updateMany?: Array<language_bookUpdateManyWithWhereWithoutLanguageInput>;

    @Field(() => [language_bookScalarWhereInput], {nullable:true})
    @Type(() => language_bookScalarWhereInput)
    deleteMany?: Array<language_bookScalarWhereInput>;
}

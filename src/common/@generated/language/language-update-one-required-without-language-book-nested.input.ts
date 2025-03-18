import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languageCreateWithoutLanguage_bookInput } from './language-create-without-language-book.input';
import { Type } from 'class-transformer';
import { languageCreateOrConnectWithoutLanguage_bookInput } from './language-create-or-connect-without-language-book.input';
import { languageUpsertWithoutLanguage_bookInput } from './language-upsert-without-language-book.input';
import { Prisma } from '@prisma/client';
import { languageWhereUniqueInput } from './language-where-unique.input';
import { languageUpdateToOneWithWhereWithoutLanguage_bookInput } from './language-update-to-one-with-where-without-language-book.input';

@InputType()
export class languageUpdateOneRequiredWithoutLanguage_bookNestedInput {

    @Field(() => languageCreateWithoutLanguage_bookInput, {nullable:true})
    @Type(() => languageCreateWithoutLanguage_bookInput)
    create?: languageCreateWithoutLanguage_bookInput;

    @Field(() => languageCreateOrConnectWithoutLanguage_bookInput, {nullable:true})
    @Type(() => languageCreateOrConnectWithoutLanguage_bookInput)
    connectOrCreate?: languageCreateOrConnectWithoutLanguage_bookInput;

    @Field(() => languageUpsertWithoutLanguage_bookInput, {nullable:true})
    @Type(() => languageUpsertWithoutLanguage_bookInput)
    upsert?: languageUpsertWithoutLanguage_bookInput;

    @Field(() => languageWhereUniqueInput, {nullable:true})
    @Type(() => languageWhereUniqueInput)
    connect?: Prisma.AtLeast<languageWhereUniqueInput, 'id' | 'language_code'>;

    @Field(() => languageUpdateToOneWithWhereWithoutLanguage_bookInput, {nullable:true})
    @Type(() => languageUpdateToOneWithWhereWithoutLanguage_bookInput)
    update?: languageUpdateToOneWithWhereWithoutLanguage_bookInput;
}

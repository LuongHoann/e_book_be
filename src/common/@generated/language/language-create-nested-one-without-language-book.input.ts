import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languageCreateWithoutLanguage_bookInput } from './language-create-without-language-book.input';
import { Type } from 'class-transformer';
import { languageCreateOrConnectWithoutLanguage_bookInput } from './language-create-or-connect-without-language-book.input';
import { Prisma } from '@prisma/client';
import { languageWhereUniqueInput } from './language-where-unique.input';

@InputType()
export class languageCreateNestedOneWithoutLanguage_bookInput {

    @Field(() => languageCreateWithoutLanguage_bookInput, {nullable:true})
    @Type(() => languageCreateWithoutLanguage_bookInput)
    create?: languageCreateWithoutLanguage_bookInput;

    @Field(() => languageCreateOrConnectWithoutLanguage_bookInput, {nullable:true})
    @Type(() => languageCreateOrConnectWithoutLanguage_bookInput)
    connectOrCreate?: languageCreateOrConnectWithoutLanguage_bookInput;

    @Field(() => languageWhereUniqueInput, {nullable:true})
    @Type(() => languageWhereUniqueInput)
    connect?: Prisma.AtLeast<languageWhereUniqueInput, 'id' | 'code'>;
}

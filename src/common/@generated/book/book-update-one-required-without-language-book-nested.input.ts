import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { bookCreateWithoutLanguage_bookInput } from './book-create-without-language-book.input';
import { Type } from 'class-transformer';
import { bookCreateOrConnectWithoutLanguage_bookInput } from './book-create-or-connect-without-language-book.input';
import { bookUpsertWithoutLanguage_bookInput } from './book-upsert-without-language-book.input';
import { Prisma } from '@prisma/client';
import { bookWhereUniqueInput } from './book-where-unique.input';
import { bookUpdateToOneWithWhereWithoutLanguage_bookInput } from './book-update-to-one-with-where-without-language-book.input';

@InputType()
export class bookUpdateOneRequiredWithoutLanguage_bookNestedInput {

    @Field(() => bookCreateWithoutLanguage_bookInput, {nullable:true})
    @Type(() => bookCreateWithoutLanguage_bookInput)
    create?: bookCreateWithoutLanguage_bookInput;

    @Field(() => bookCreateOrConnectWithoutLanguage_bookInput, {nullable:true})
    @Type(() => bookCreateOrConnectWithoutLanguage_bookInput)
    connectOrCreate?: bookCreateOrConnectWithoutLanguage_bookInput;

    @Field(() => bookUpsertWithoutLanguage_bookInput, {nullable:true})
    @Type(() => bookUpsertWithoutLanguage_bookInput)
    upsert?: bookUpsertWithoutLanguage_bookInput;

    @Field(() => bookWhereUniqueInput, {nullable:true})
    @Type(() => bookWhereUniqueInput)
    connect?: Prisma.AtLeast<bookWhereUniqueInput, 'id' | 'isbn'>;

    @Field(() => bookUpdateToOneWithWhereWithoutLanguage_bookInput, {nullable:true})
    @Type(() => bookUpdateToOneWithWhereWithoutLanguage_bookInput)
    update?: bookUpdateToOneWithWhereWithoutLanguage_bookInput;
}

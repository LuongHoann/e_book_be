import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { bookCreateWithoutLanguage_bookInput } from './book-create-without-language-book.input';
import { Type } from 'class-transformer';
import { bookCreateOrConnectWithoutLanguage_bookInput } from './book-create-or-connect-without-language-book.input';
import { Prisma } from '@prisma/client';
import { bookWhereUniqueInput } from './book-where-unique.input';

@InputType()
export class bookCreateNestedOneWithoutLanguage_bookInput {

    @Field(() => bookCreateWithoutLanguage_bookInput, {nullable:true})
    @Type(() => bookCreateWithoutLanguage_bookInput)
    create?: bookCreateWithoutLanguage_bookInput;

    @Field(() => bookCreateOrConnectWithoutLanguage_bookInput, {nullable:true})
    @Type(() => bookCreateOrConnectWithoutLanguage_bookInput)
    connectOrCreate?: bookCreateOrConnectWithoutLanguage_bookInput;

    @Field(() => bookWhereUniqueInput, {nullable:true})
    @Type(() => bookWhereUniqueInput)
    connect?: Prisma.AtLeast<bookWhereUniqueInput, 'id' | 'isbn'>;
}

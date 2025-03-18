import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { bookWhereUniqueInput } from './book-where-unique.input';
import { Type } from 'class-transformer';
import { bookCreateWithoutLanguage_bookInput } from './book-create-without-language-book.input';

@InputType()
export class bookCreateOrConnectWithoutLanguage_bookInput {

    @Field(() => bookWhereUniqueInput, {nullable:false})
    @Type(() => bookWhereUniqueInput)
    where!: Prisma.AtLeast<bookWhereUniqueInput, 'id' | 'isbn'>;

    @Field(() => bookCreateWithoutLanguage_bookInput, {nullable:false})
    @Type(() => bookCreateWithoutLanguage_bookInput)
    create!: bookCreateWithoutLanguage_bookInput;
}

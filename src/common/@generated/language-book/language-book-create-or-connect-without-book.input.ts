import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { language_bookWhereUniqueInput } from './language-book-where-unique.input';
import { Type } from 'class-transformer';
import { language_bookCreateWithoutBookInput } from './language-book-create-without-book.input';

@InputType()
export class language_bookCreateOrConnectWithoutBookInput {

    @Field(() => language_bookWhereUniqueInput, {nullable:false})
    @Type(() => language_bookWhereUniqueInput)
    where!: Prisma.AtLeast<language_bookWhereUniqueInput, 'language_id_book_id'>;

    @Field(() => language_bookCreateWithoutBookInput, {nullable:false})
    @Type(() => language_bookCreateWithoutBookInput)
    create!: language_bookCreateWithoutBookInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { language_bookWhereUniqueInput } from './language-book-where-unique.input';
import { Type } from 'class-transformer';
import { language_bookUpdateWithoutBookInput } from './language-book-update-without-book.input';

@InputType()
export class language_bookUpdateWithWhereUniqueWithoutBookInput {

    @Field(() => language_bookWhereUniqueInput, {nullable:false})
    @Type(() => language_bookWhereUniqueInput)
    where!: Prisma.AtLeast<language_bookWhereUniqueInput, 'language_id_book_id'>;

    @Field(() => language_bookUpdateWithoutBookInput, {nullable:false})
    @Type(() => language_bookUpdateWithoutBookInput)
    data!: language_bookUpdateWithoutBookInput;
}

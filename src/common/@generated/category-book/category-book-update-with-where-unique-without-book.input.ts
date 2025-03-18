import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { category_bookWhereUniqueInput } from './category-book-where-unique.input';
import { Type } from 'class-transformer';
import { category_bookUpdateWithoutBookInput } from './category-book-update-without-book.input';

@InputType()
export class category_bookUpdateWithWhereUniqueWithoutBookInput {

    @Field(() => category_bookWhereUniqueInput, {nullable:false})
    @Type(() => category_bookWhereUniqueInput)
    where!: Prisma.AtLeast<category_bookWhereUniqueInput, 'category_book_id'>;

    @Field(() => category_bookUpdateWithoutBookInput, {nullable:false})
    @Type(() => category_bookUpdateWithoutBookInput)
    data!: category_bookUpdateWithoutBookInput;
}

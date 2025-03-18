import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { category_bookWhereUniqueInput } from './category-book-where-unique.input';
import { Type } from 'class-transformer';
import { category_bookUpdateWithoutBookInput } from './category-book-update-without-book.input';
import { category_bookCreateWithoutBookInput } from './category-book-create-without-book.input';

@InputType()
export class category_bookUpsertWithWhereUniqueWithoutBookInput {

    @Field(() => category_bookWhereUniqueInput, {nullable:false})
    @Type(() => category_bookWhereUniqueInput)
    where!: Prisma.AtLeast<category_bookWhereUniqueInput, 'category_book_id'>;

    @Field(() => category_bookUpdateWithoutBookInput, {nullable:false})
    @Type(() => category_bookUpdateWithoutBookInput)
    update!: category_bookUpdateWithoutBookInput;

    @Field(() => category_bookCreateWithoutBookInput, {nullable:false})
    @Type(() => category_bookCreateWithoutBookInput)
    create!: category_bookCreateWithoutBookInput;
}

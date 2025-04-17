import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { category_bookWhereUniqueInput } from './category-book-where-unique.input';
import { Type } from 'class-transformer';
import { category_bookCreateWithoutBookInput } from './category-book-create-without-book.input';

@InputType()
export class category_bookCreateOrConnectWithoutBookInput {

    @Field(() => category_bookWhereUniqueInput, {nullable:false})
    @Type(() => category_bookWhereUniqueInput)
    where!: Prisma.AtLeast<category_bookWhereUniqueInput, 'category_id_book_id'>;

    @Field(() => category_bookCreateWithoutBookInput, {nullable:false})
    @Type(() => category_bookCreateWithoutBookInput)
    create!: category_bookCreateWithoutBookInput;
}

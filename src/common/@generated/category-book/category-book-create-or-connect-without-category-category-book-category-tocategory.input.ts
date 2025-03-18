import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { category_bookWhereUniqueInput } from './category-book-where-unique.input';
import { Type } from 'class-transformer';
import { category_bookCreateWithoutCategory_category_book_categoryTocategoryInput } from './category-book-create-without-category-category-book-category-tocategory.input';

@InputType()
export class category_bookCreateOrConnectWithoutCategory_category_book_categoryTocategoryInput {

    @Field(() => category_bookWhereUniqueInput, {nullable:false})
    @Type(() => category_bookWhereUniqueInput)
    where!: Prisma.AtLeast<category_bookWhereUniqueInput, 'category_book_id'>;

    @Field(() => category_bookCreateWithoutCategory_category_book_categoryTocategoryInput, {nullable:false})
    @Type(() => category_bookCreateWithoutCategory_category_book_categoryTocategoryInput)
    create!: category_bookCreateWithoutCategory_category_book_categoryTocategoryInput;
}

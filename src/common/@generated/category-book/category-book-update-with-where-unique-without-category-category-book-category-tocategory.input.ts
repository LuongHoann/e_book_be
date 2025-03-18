import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { category_bookWhereUniqueInput } from './category-book-where-unique.input';
import { Type } from 'class-transformer';
import { category_bookUpdateWithoutCategory_category_book_categoryTocategoryInput } from './category-book-update-without-category-category-book-category-tocategory.input';

@InputType()
export class category_bookUpdateWithWhereUniqueWithoutCategory_category_book_categoryTocategoryInput {

    @Field(() => category_bookWhereUniqueInput, {nullable:false})
    @Type(() => category_bookWhereUniqueInput)
    where!: Prisma.AtLeast<category_bookWhereUniqueInput, 'category_book_id'>;

    @Field(() => category_bookUpdateWithoutCategory_category_book_categoryTocategoryInput, {nullable:false})
    @Type(() => category_bookUpdateWithoutCategory_category_book_categoryTocategoryInput)
    data!: category_bookUpdateWithoutCategory_category_book_categoryTocategoryInput;
}

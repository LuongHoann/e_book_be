import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { categoryWhereUniqueInput } from './category-where-unique.input';
import { Type } from 'class-transformer';
import { categoryCreateWithoutCategory_book_category_book_categoryTocategoryInput } from './category-create-without-category-book-category-book-category-tocategory.input';

@InputType()
export class categoryCreateOrConnectWithoutCategory_book_category_book_categoryTocategoryInput {

    @Field(() => categoryWhereUniqueInput, {nullable:false})
    @Type(() => categoryWhereUniqueInput)
    where!: Prisma.AtLeast<categoryWhereUniqueInput, 'name'>;

    @Field(() => categoryCreateWithoutCategory_book_category_book_categoryTocategoryInput, {nullable:false})
    @Type(() => categoryCreateWithoutCategory_book_category_book_categoryTocategoryInput)
    create!: categoryCreateWithoutCategory_book_category_book_categoryTocategoryInput;
}

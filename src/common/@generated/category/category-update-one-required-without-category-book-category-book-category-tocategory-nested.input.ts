import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { categoryCreateWithoutCategory_book_category_book_categoryTocategoryInput } from './category-create-without-category-book-category-book-category-tocategory.input';
import { Type } from 'class-transformer';
import { categoryCreateOrConnectWithoutCategory_book_category_book_categoryTocategoryInput } from './category-create-or-connect-without-category-book-category-book-category-tocategory.input';
import { categoryUpsertWithoutCategory_book_category_book_categoryTocategoryInput } from './category-upsert-without-category-book-category-book-category-tocategory.input';
import { Prisma } from '@prisma/client';
import { categoryWhereUniqueInput } from './category-where-unique.input';
import { categoryUpdateToOneWithWhereWithoutCategory_book_category_book_categoryTocategoryInput } from './category-update-to-one-with-where-without-category-book-category-book-category-tocategory.input';

@InputType()
export class categoryUpdateOneRequiredWithoutCategory_book_category_book_categoryTocategoryNestedInput {

    @Field(() => categoryCreateWithoutCategory_book_category_book_categoryTocategoryInput, {nullable:true})
    @Type(() => categoryCreateWithoutCategory_book_category_book_categoryTocategoryInput)
    create?: categoryCreateWithoutCategory_book_category_book_categoryTocategoryInput;

    @Field(() => categoryCreateOrConnectWithoutCategory_book_category_book_categoryTocategoryInput, {nullable:true})
    @Type(() => categoryCreateOrConnectWithoutCategory_book_category_book_categoryTocategoryInput)
    connectOrCreate?: categoryCreateOrConnectWithoutCategory_book_category_book_categoryTocategoryInput;

    @Field(() => categoryUpsertWithoutCategory_book_category_book_categoryTocategoryInput, {nullable:true})
    @Type(() => categoryUpsertWithoutCategory_book_category_book_categoryTocategoryInput)
    upsert?: categoryUpsertWithoutCategory_book_category_book_categoryTocategoryInput;

    @Field(() => categoryWhereUniqueInput, {nullable:true})
    @Type(() => categoryWhereUniqueInput)
    connect?: Prisma.AtLeast<categoryWhereUniqueInput, 'name'>;

    @Field(() => categoryUpdateToOneWithWhereWithoutCategory_book_category_book_categoryTocategoryInput, {nullable:true})
    @Type(() => categoryUpdateToOneWithWhereWithoutCategory_book_category_book_categoryTocategoryInput)
    update?: categoryUpdateToOneWithWhereWithoutCategory_book_category_book_categoryTocategoryInput;
}

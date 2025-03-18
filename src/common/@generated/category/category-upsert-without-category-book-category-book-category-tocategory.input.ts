import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { categoryUpdateWithoutCategory_book_category_book_categoryTocategoryInput } from './category-update-without-category-book-category-book-category-tocategory.input';
import { Type } from 'class-transformer';
import { categoryCreateWithoutCategory_book_category_book_categoryTocategoryInput } from './category-create-without-category-book-category-book-category-tocategory.input';
import { categoryWhereInput } from './category-where.input';

@InputType()
export class categoryUpsertWithoutCategory_book_category_book_categoryTocategoryInput {

    @Field(() => categoryUpdateWithoutCategory_book_category_book_categoryTocategoryInput, {nullable:false})
    @Type(() => categoryUpdateWithoutCategory_book_category_book_categoryTocategoryInput)
    update!: categoryUpdateWithoutCategory_book_category_book_categoryTocategoryInput;

    @Field(() => categoryCreateWithoutCategory_book_category_book_categoryTocategoryInput, {nullable:false})
    @Type(() => categoryCreateWithoutCategory_book_category_book_categoryTocategoryInput)
    create!: categoryCreateWithoutCategory_book_category_book_categoryTocategoryInput;

    @Field(() => categoryWhereInput, {nullable:true})
    @Type(() => categoryWhereInput)
    where?: categoryWhereInput;
}

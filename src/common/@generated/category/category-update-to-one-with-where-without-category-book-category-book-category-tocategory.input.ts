import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { categoryWhereInput } from './category-where.input';
import { Type } from 'class-transformer';
import { categoryUpdateWithoutCategory_book_category_book_categoryTocategoryInput } from './category-update-without-category-book-category-book-category-tocategory.input';

@InputType()
export class categoryUpdateToOneWithWhereWithoutCategory_book_category_book_categoryTocategoryInput {

    @Field(() => categoryWhereInput, {nullable:true})
    @Type(() => categoryWhereInput)
    where?: categoryWhereInput;

    @Field(() => categoryUpdateWithoutCategory_book_category_book_categoryTocategoryInput, {nullable:false})
    @Type(() => categoryUpdateWithoutCategory_book_category_book_categoryTocategoryInput)
    data!: categoryUpdateWithoutCategory_book_category_book_categoryTocategoryInput;
}

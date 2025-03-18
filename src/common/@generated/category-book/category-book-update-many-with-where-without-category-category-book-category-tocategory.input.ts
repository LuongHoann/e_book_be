import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { category_bookScalarWhereInput } from './category-book-scalar-where.input';
import { Type } from 'class-transformer';
import { category_bookUncheckedUpdateManyWithoutCategory_category_book_categoryTocategoryInput } from './category-book-unchecked-update-many-without-category-category-book-category-tocategory.input';

@InputType()
export class category_bookUpdateManyWithWhereWithoutCategory_category_book_categoryTocategoryInput {

    @Field(() => category_bookScalarWhereInput, {nullable:false})
    @Type(() => category_bookScalarWhereInput)
    where!: category_bookScalarWhereInput;

    @Field(() => category_bookUncheckedUpdateManyWithoutCategory_category_book_categoryTocategoryInput, {nullable:false})
    @Type(() => category_bookUncheckedUpdateManyWithoutCategory_category_book_categoryTocategoryInput)
    data!: category_bookUncheckedUpdateManyWithoutCategory_category_book_categoryTocategoryInput;
}

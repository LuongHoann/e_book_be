import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { category_bookWhereUniqueInput } from './category-book-where-unique.input';
import { Type } from 'class-transformer';
import { category_bookUpdateWithoutCategoryInput } from './category-book-update-without-category.input';

@InputType()
export class category_bookUpdateWithWhereUniqueWithoutCategoryInput {

    @Field(() => category_bookWhereUniqueInput, {nullable:false})
    @Type(() => category_bookWhereUniqueInput)
    where!: Prisma.AtLeast<category_bookWhereUniqueInput, 'category_id_book_id'>;

    @Field(() => category_bookUpdateWithoutCategoryInput, {nullable:false})
    @Type(() => category_bookUpdateWithoutCategoryInput)
    data!: category_bookUpdateWithoutCategoryInput;
}

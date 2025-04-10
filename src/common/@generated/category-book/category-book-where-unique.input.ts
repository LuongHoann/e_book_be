import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { category_bookCategoryBook_idCompoundUniqueInput } from './category-book-category-book-id-compound-unique.input';
import { category_bookWhereInput } from './category-book-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { UuidFilter } from '../prisma/uuid-filter.input';
import { BookScalarRelationFilter } from '../prisma/book-scalar-relation-filter.input';
import { CategoryScalarRelationFilter } from '../prisma/category-scalar-relation-filter.input';

@InputType()
export class category_bookWhereUniqueInput {

    @Field(() => category_bookCategoryBook_idCompoundUniqueInput, {nullable:true})
    category_book_id?: category_bookCategoryBook_idCompoundUniqueInput;

    @Field(() => [category_bookWhereInput], {nullable:true})
    AND?: Array<category_bookWhereInput>;

    @Field(() => [category_bookWhereInput], {nullable:true})
    OR?: Array<category_bookWhereInput>;

    @Field(() => [category_bookWhereInput], {nullable:true})
    NOT?: Array<category_bookWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    category?: StringFilter;

    @Field(() => UuidFilter, {nullable:true})
    book_id?: UuidFilter;

    @Field(() => BookScalarRelationFilter, {nullable:true})
    book?: BookScalarRelationFilter;

    @Field(() => CategoryScalarRelationFilter, {nullable:true})
    category_category_book_categoryTocategory?: CategoryScalarRelationFilter;
}

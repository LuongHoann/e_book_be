import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { Category_bookListRelationFilter } from '../prisma/category-book-list-relation-filter.input';

@InputType()
export class categoryWhereInput {

    @Field(() => [categoryWhereInput], {nullable:true})
    AND?: Array<categoryWhereInput>;

    @Field(() => [categoryWhereInput], {nullable:true})
    OR?: Array<categoryWhereInput>;

    @Field(() => [categoryWhereInput], {nullable:true})
    NOT?: Array<categoryWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => Category_bookListRelationFilter, {nullable:true})
    category_book_category_book_categoryTocategory?: Category_bookListRelationFilter;
}

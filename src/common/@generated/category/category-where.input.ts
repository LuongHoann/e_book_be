import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
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

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    description?: StringFilter;

    @Field(() => Category_bookListRelationFilter, {nullable:true})
    category_book?: Category_bookListRelationFilter;
}

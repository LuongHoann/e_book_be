import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { category_book } from '../category-book/category-book.model';
import { CategoryCount } from '../prisma/category-count.output';

@ObjectType()
export class category {

    @Field(() => ID, {nullable:false})
    name!: string;

    @Field(() => [category_book], {nullable:true})
    category_book_category_book_categoryTocategory?: Array<category_book>;

    @Field(() => CategoryCount, {nullable:false})
    _count?: CategoryCount;
}

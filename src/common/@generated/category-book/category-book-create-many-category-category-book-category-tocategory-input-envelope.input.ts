import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { category_bookCreateManyCategory_category_book_categoryTocategoryInput } from './category-book-create-many-category-category-book-category-tocategory.input';
import { Type } from 'class-transformer';

@InputType()
export class category_bookCreateManyCategory_category_book_categoryTocategoryInputEnvelope {

    @Field(() => [category_bookCreateManyCategory_category_book_categoryTocategoryInput], {nullable:false})
    @Type(() => category_bookCreateManyCategory_category_book_categoryTocategoryInput)
    data!: Array<category_bookCreateManyCategory_category_book_categoryTocategoryInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

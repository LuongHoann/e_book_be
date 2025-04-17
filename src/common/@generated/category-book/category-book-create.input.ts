import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { bookCreateNestedOneWithoutCategory_bookInput } from '../book/book-create-nested-one-without-category-book.input';
import { categoryCreateNestedOneWithoutCategory_bookInput } from '../category/category-create-nested-one-without-category-book.input';

@InputType()
export class category_bookCreateInput {

    @Field(() => bookCreateNestedOneWithoutCategory_bookInput, {nullable:false})
    book!: bookCreateNestedOneWithoutCategory_bookInput;

    @Field(() => categoryCreateNestedOneWithoutCategory_bookInput, {nullable:true})
    category?: categoryCreateNestedOneWithoutCategory_bookInput;
}

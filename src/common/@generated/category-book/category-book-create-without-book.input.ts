import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { categoryCreateNestedOneWithoutCategory_bookInput } from '../category/category-create-nested-one-without-category-book.input';

@InputType()
export class category_bookCreateWithoutBookInput {

    @Field(() => categoryCreateNestedOneWithoutCategory_bookInput, {nullable:true})
    category?: categoryCreateNestedOneWithoutCategory_bookInput;
}

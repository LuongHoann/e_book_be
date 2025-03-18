import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class category_bookCreateManyCategory_category_book_categoryTocategoryInput {

    @Field(() => String, {nullable:false})
    book_id!: string;
}

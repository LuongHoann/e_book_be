import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class category_bookCategoryBook_idCompoundUniqueInput {

    @Field(() => String, {nullable:false})
    category!: string;

    @Field(() => String, {nullable:false})
    book_id!: string;
}

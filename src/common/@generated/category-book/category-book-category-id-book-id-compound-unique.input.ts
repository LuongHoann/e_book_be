import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class category_bookCategory_idBook_idCompoundUniqueInput {

    @Field(() => Int, {nullable:false})
    category_id!: number;

    @Field(() => String, {nullable:false})
    book_id!: string;
}

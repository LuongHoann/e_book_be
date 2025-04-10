import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class book_discountBook_idDiscount_idCompoundUniqueInput {

    @Field(() => String, {nullable:false})
    book_id!: string;

    @Field(() => Int, {nullable:false})
    discount_id!: number;
}

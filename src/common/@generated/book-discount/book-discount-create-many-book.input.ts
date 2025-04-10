import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class book_discountCreateManyBookInput {

    @Field(() => Int, {nullable:true})
    discount_id?: number;
}

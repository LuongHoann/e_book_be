import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class book_discountCreateManyDiscount_codeInput {

    @Field(() => String, {nullable:false})
    book_id!: string;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class book_discountUncheckedCreateWithoutDiscount_codeInput {

    @Field(() => String, {nullable:false})
    book_id!: string;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class transaction_historyUncheckedCreateWithoutUserInput {

    @Field(() => String, {nullable:false})
    book_id!: string;

    @Field(() => Date, {nullable:true})
    payment_date?: Date | string;
}

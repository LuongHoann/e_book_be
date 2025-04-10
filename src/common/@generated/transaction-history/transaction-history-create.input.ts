import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { bookCreateNestedOneWithoutTransaction_historyInput } from '../book/book-create-nested-one-without-transaction-history.input';
import { userCreateNestedOneWithoutTransaction_historyInput } from '../user/user-create-nested-one-without-transaction-history.input';

@InputType()
export class transaction_historyCreateInput {

    @Field(() => Date, {nullable:true})
    payment_date?: Date | string;

    @Field(() => bookCreateNestedOneWithoutTransaction_historyInput, {nullable:false})
    book!: bookCreateNestedOneWithoutTransaction_historyInput;

    @Field(() => userCreateNestedOneWithoutTransaction_historyInput, {nullable:false})
    user!: userCreateNestedOneWithoutTransaction_historyInput;
}

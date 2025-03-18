import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { userCreateNestedOneWithoutTransaction_historyInput } from '../user/user-create-nested-one-without-transaction-history.input';

@InputType()
export class transaction_historyCreateWithoutBookInput {

    @Field(() => Date, {nullable:true})
    payment_date?: Date | string;

    @Field(() => userCreateNestedOneWithoutTransaction_historyInput, {nullable:false})
    user!: userCreateNestedOneWithoutTransaction_historyInput;
}

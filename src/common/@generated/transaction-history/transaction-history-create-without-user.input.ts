import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { bookCreateNestedOneWithoutTransaction_historyInput } from '../book/book-create-nested-one-without-transaction-history.input';
import { Type } from 'class-transformer';

@InputType()
export class transaction_historyCreateWithoutUserInput {

    @Field(() => Date, {nullable:true})
    payment_date?: Date | string;

    @Field(() => bookCreateNestedOneWithoutTransaction_historyInput, {nullable:false})
    @Type(() => bookCreateNestedOneWithoutTransaction_historyInput)
    book!: bookCreateNestedOneWithoutTransaction_historyInput;
}

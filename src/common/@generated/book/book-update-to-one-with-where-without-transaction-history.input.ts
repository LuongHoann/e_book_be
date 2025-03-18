import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { bookWhereInput } from './book-where.input';
import { Type } from 'class-transformer';
import { bookUpdateWithoutTransaction_historyInput } from './book-update-without-transaction-history.input';

@InputType()
export class bookUpdateToOneWithWhereWithoutTransaction_historyInput {

    @Field(() => bookWhereInput, {nullable:true})
    @Type(() => bookWhereInput)
    where?: bookWhereInput;

    @Field(() => bookUpdateWithoutTransaction_historyInput, {nullable:false})
    @Type(() => bookUpdateWithoutTransaction_historyInput)
    data!: bookUpdateWithoutTransaction_historyInput;
}

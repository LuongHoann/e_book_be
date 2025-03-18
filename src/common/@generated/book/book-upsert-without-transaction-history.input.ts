import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { bookUpdateWithoutTransaction_historyInput } from './book-update-without-transaction-history.input';
import { Type } from 'class-transformer';
import { bookCreateWithoutTransaction_historyInput } from './book-create-without-transaction-history.input';
import { bookWhereInput } from './book-where.input';

@InputType()
export class bookUpsertWithoutTransaction_historyInput {

    @Field(() => bookUpdateWithoutTransaction_historyInput, {nullable:false})
    @Type(() => bookUpdateWithoutTransaction_historyInput)
    update!: bookUpdateWithoutTransaction_historyInput;

    @Field(() => bookCreateWithoutTransaction_historyInput, {nullable:false})
    @Type(() => bookCreateWithoutTransaction_historyInput)
    create!: bookCreateWithoutTransaction_historyInput;

    @Field(() => bookWhereInput, {nullable:true})
    @Type(() => bookWhereInput)
    where?: bookWhereInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { userUpdateWithoutTransaction_historyInput } from './user-update-without-transaction-history.input';
import { Type } from 'class-transformer';
import { userCreateWithoutTransaction_historyInput } from './user-create-without-transaction-history.input';
import { userWhereInput } from './user-where.input';

@InputType()
export class userUpsertWithoutTransaction_historyInput {

    @Field(() => userUpdateWithoutTransaction_historyInput, {nullable:false})
    @Type(() => userUpdateWithoutTransaction_historyInput)
    update!: userUpdateWithoutTransaction_historyInput;

    @Field(() => userCreateWithoutTransaction_historyInput, {nullable:false})
    @Type(() => userCreateWithoutTransaction_historyInput)
    create!: userCreateWithoutTransaction_historyInput;

    @Field(() => userWhereInput, {nullable:true})
    @Type(() => userWhereInput)
    where?: userWhereInput;
}

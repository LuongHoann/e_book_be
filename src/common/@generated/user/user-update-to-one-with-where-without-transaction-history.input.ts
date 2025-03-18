import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { userWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { userUpdateWithoutTransaction_historyInput } from './user-update-without-transaction-history.input';

@InputType()
export class userUpdateToOneWithWhereWithoutTransaction_historyInput {

    @Field(() => userWhereInput, {nullable:true})
    @Type(() => userWhereInput)
    where?: userWhereInput;

    @Field(() => userUpdateWithoutTransaction_historyInput, {nullable:false})
    @Type(() => userUpdateWithoutTransaction_historyInput)
    data!: userUpdateWithoutTransaction_historyInput;
}

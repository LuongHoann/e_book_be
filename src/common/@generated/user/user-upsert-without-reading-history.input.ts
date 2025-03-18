import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { userUpdateWithoutReading_historyInput } from './user-update-without-reading-history.input';
import { Type } from 'class-transformer';
import { userCreateWithoutReading_historyInput } from './user-create-without-reading-history.input';
import { userWhereInput } from './user-where.input';

@InputType()
export class userUpsertWithoutReading_historyInput {

    @Field(() => userUpdateWithoutReading_historyInput, {nullable:false})
    @Type(() => userUpdateWithoutReading_historyInput)
    update!: userUpdateWithoutReading_historyInput;

    @Field(() => userCreateWithoutReading_historyInput, {nullable:false})
    @Type(() => userCreateWithoutReading_historyInput)
    create!: userCreateWithoutReading_historyInput;

    @Field(() => userWhereInput, {nullable:true})
    @Type(() => userWhereInput)
    where?: userWhereInput;
}

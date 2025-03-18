import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { userWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { userUpdateWithoutReading_historyInput } from './user-update-without-reading-history.input';

@InputType()
export class userUpdateToOneWithWhereWithoutReading_historyInput {

    @Field(() => userWhereInput, {nullable:true})
    @Type(() => userWhereInput)
    where?: userWhereInput;

    @Field(() => userUpdateWithoutReading_historyInput, {nullable:false})
    @Type(() => userUpdateWithoutReading_historyInput)
    data!: userUpdateWithoutReading_historyInput;
}

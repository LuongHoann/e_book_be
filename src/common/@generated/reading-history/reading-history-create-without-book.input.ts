import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { userCreateNestedOneWithoutReading_historyInput } from '../user/user-create-nested-one-without-reading-history.input';

@InputType()
export class reading_historyCreateWithoutBookInput {

    @Field(() => String, {nullable:true})
    state?: string;

    @Field(() => Int, {nullable:true})
    page?: number;

    @Field(() => Date, {nullable:true})
    update_at?: Date | string;

    @Field(() => userCreateNestedOneWithoutReading_historyInput, {nullable:false})
    user!: userCreateNestedOneWithoutReading_historyInput;
}

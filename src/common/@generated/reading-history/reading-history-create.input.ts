import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { bookCreateNestedOneWithoutReading_historyInput } from '../book/book-create-nested-one-without-reading-history.input';
import { Type } from 'class-transformer';
import { userCreateNestedOneWithoutReading_historyInput } from '../user/user-create-nested-one-without-reading-history.input';

@InputType()
export class reading_historyCreateInput {

    @Field(() => String, {nullable:true})
    state?: string;

    @Field(() => Int, {nullable:true})
    page?: number;

    @Field(() => Date, {nullable:true})
    update_at?: Date | string;

    @Field(() => bookCreateNestedOneWithoutReading_historyInput, {nullable:false})
    @Type(() => bookCreateNestedOneWithoutReading_historyInput)
    book!: bookCreateNestedOneWithoutReading_historyInput;

    @Field(() => userCreateNestedOneWithoutReading_historyInput, {nullable:false})
    user!: userCreateNestedOneWithoutReading_historyInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { bookCreateNestedOneWithoutReading_historyInput } from '../book/book-create-nested-one-without-reading-history.input';

@InputType()
export class reading_historyCreateWithoutUserInput {

    @Field(() => String, {nullable:true})
    state?: string;

    @Field(() => Int, {nullable:true})
    page?: number;

    @Field(() => Date, {nullable:true})
    update_at?: Date | string;

    @Field(() => bookCreateNestedOneWithoutReading_historyInput, {nullable:false})
    book!: bookCreateNestedOneWithoutReading_historyInput;
}

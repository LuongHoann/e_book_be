import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class language_bookUncheckedCreateWithoutBookInput {

    @Field(() => Int, {nullable:false})
    language_id!: number;
}

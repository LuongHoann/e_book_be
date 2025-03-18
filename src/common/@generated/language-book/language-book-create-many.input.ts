import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class language_bookCreateManyInput {

    @Field(() => Int, {nullable:false})
    language_id!: number;

    @Field(() => String, {nullable:false})
    book_id!: string;
}

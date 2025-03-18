import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class reviewCreateManyUserInput {

    @Field(() => String, {nullable:false})
    book_id!: string;

    @Field(() => Int, {nullable:false})
    rating!: number;
}

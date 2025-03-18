import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class commentCreateManyUserInput {

    @Field(() => String, {nullable:false})
    book_id!: string;

    @Field(() => String, {nullable:true})
    content?: string;
}

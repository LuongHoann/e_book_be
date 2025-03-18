import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class shopping_cartCreateManyUserInput {

    @Field(() => String, {nullable:false})
    book_id!: string;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class favouriteCreateManyUserInput {

    @Field(() => String, {nullable:false})
    book_id!: string;
}

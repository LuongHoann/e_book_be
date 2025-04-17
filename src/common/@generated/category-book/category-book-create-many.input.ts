import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class category_bookCreateManyInput {

    @Field(() => Int, {nullable:true})
    category_id?: number;

    @Field(() => String, {nullable:false})
    book_id!: string;
}

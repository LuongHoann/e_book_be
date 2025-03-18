import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { bookWhereInput } from '../book/book-where.input';

@InputType()
export class BookListRelationFilter {

    @Field(() => bookWhereInput, {nullable:true})
    every?: bookWhereInput;

    @Field(() => bookWhereInput, {nullable:true})
    some?: bookWhereInput;

    @Field(() => bookWhereInput, {nullable:true})
    none?: bookWhereInput;
}

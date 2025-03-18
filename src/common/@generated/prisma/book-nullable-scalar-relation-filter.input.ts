import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { bookWhereInput } from '../book/book-where.input';

@InputType()
export class BookNullableScalarRelationFilter {

    @Field(() => bookWhereInput, {nullable:true})
    is?: bookWhereInput;

    @Field(() => bookWhereInput, {nullable:true})
    isNot?: bookWhereInput;
}

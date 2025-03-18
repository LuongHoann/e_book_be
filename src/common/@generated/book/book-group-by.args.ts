import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { bookWhereInput } from './book-where.input';
import { Type } from 'class-transformer';
import { bookOrderByWithAggregationInput } from './book-order-by-with-aggregation.input';
import { BookScalarFieldEnum } from '../prisma/book-scalar-field.enum';
import { bookScalarWhereWithAggregatesInput } from './book-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class bookGroupByArgs {

    @Field(() => bookWhereInput, {nullable:true})
    @Type(() => bookWhereInput)
    where?: bookWhereInput;

    @Field(() => [bookOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<bookOrderByWithAggregationInput>;

    @Field(() => [BookScalarFieldEnum], {nullable:false})
    by!: Array<`${BookScalarFieldEnum}`>;

    @Field(() => bookScalarWhereWithAggregatesInput, {nullable:true})
    having?: bookScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}

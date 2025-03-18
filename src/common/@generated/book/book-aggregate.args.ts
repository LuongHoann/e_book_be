import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { bookWhereInput } from './book-where.input';
import { Type } from 'class-transformer';
import { bookOrderByWithRelationInput } from './book-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { bookWhereUniqueInput } from './book-where-unique.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class bookAggregateArgs {

    @Field(() => bookWhereInput, {nullable:true})
    @Type(() => bookWhereInput)
    where?: bookWhereInput;

    @Field(() => [bookOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<bookOrderByWithRelationInput>;

    @Field(() => bookWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<bookWhereUniqueInput, 'id' | 'isbn'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}

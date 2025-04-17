import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Category_bookMinAggregate {

    @Field(() => Int, {nullable:true})
    category_id?: number;

    @Field(() => String, {nullable:true})
    book_id?: string;
}

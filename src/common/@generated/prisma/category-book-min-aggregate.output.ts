import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Category_bookMinAggregate {

    @Field(() => String, {nullable:true})
    category?: string;

    @Field(() => String, {nullable:true})
    book_id?: string;
}

import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Shopping_cartMaxAggregate {

    @Field(() => String, {nullable:true})
    book_id?: string;

    @Field(() => String, {nullable:true})
    user_id?: string;
}

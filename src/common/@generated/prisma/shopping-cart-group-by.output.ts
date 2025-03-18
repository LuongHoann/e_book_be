import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Shopping_cartCountAggregate } from './shopping-cart-count-aggregate.output';
import { Shopping_cartMinAggregate } from './shopping-cart-min-aggregate.output';
import { Shopping_cartMaxAggregate } from './shopping-cart-max-aggregate.output';

@ObjectType()
export class Shopping_cartGroupBy {

    @Field(() => String, {nullable:false})
    book_id!: string;

    @Field(() => String, {nullable:false})
    user_id!: string;

    @Field(() => Shopping_cartCountAggregate, {nullable:true})
    _count?: Shopping_cartCountAggregate;

    @Field(() => Shopping_cartMinAggregate, {nullable:true})
    _min?: Shopping_cartMinAggregate;

    @Field(() => Shopping_cartMaxAggregate, {nullable:true})
    _max?: Shopping_cartMaxAggregate;
}

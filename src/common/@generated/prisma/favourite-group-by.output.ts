import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { FavouriteCountAggregate } from './favourite-count-aggregate.output';
import { FavouriteMinAggregate } from './favourite-min-aggregate.output';
import { FavouriteMaxAggregate } from './favourite-max-aggregate.output';

@ObjectType()
export class FavouriteGroupBy {

    @Field(() => String, {nullable:false})
    book_id!: string;

    @Field(() => String, {nullable:false})
    user_id!: string;

    @Field(() => FavouriteCountAggregate, {nullable:true})
    _count?: FavouriteCountAggregate;

    @Field(() => FavouriteMinAggregate, {nullable:true})
    _min?: FavouriteMinAggregate;

    @Field(() => FavouriteMaxAggregate, {nullable:true})
    _max?: FavouriteMaxAggregate;
}

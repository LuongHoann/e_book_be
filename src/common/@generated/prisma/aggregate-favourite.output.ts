import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { FavouriteCountAggregate } from './favourite-count-aggregate.output';
import { FavouriteMinAggregate } from './favourite-min-aggregate.output';
import { FavouriteMaxAggregate } from './favourite-max-aggregate.output';

@ObjectType()
export class AggregateFavourite {

    @Field(() => FavouriteCountAggregate, {nullable:true})
    _count?: FavouriteCountAggregate;

    @Field(() => FavouriteMinAggregate, {nullable:true})
    _min?: FavouriteMinAggregate;

    @Field(() => FavouriteMaxAggregate, {nullable:true})
    _max?: FavouriteMaxAggregate;
}

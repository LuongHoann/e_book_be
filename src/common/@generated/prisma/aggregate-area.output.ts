import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { AreaCountAggregate } from './area-count-aggregate.output';
import { AreaMinAggregate } from './area-min-aggregate.output';
import { AreaMaxAggregate } from './area-max-aggregate.output';

@ObjectType()
export class AggregateArea {

    @Field(() => AreaCountAggregate, {nullable:true})
    _count?: AreaCountAggregate;

    @Field(() => AreaMinAggregate, {nullable:true})
    _min?: AreaMinAggregate;

    @Field(() => AreaMaxAggregate, {nullable:true})
    _max?: AreaMaxAggregate;
}

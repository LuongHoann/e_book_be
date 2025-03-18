import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { License_typeCountAggregate } from './license-type-count-aggregate.output';
import { License_typeAvgAggregate } from './license-type-avg-aggregate.output';
import { License_typeSumAggregate } from './license-type-sum-aggregate.output';
import { License_typeMinAggregate } from './license-type-min-aggregate.output';
import { License_typeMaxAggregate } from './license-type-max-aggregate.output';

@ObjectType()
export class AggregateLicense_type {

    @Field(() => License_typeCountAggregate, {nullable:true})
    _count?: License_typeCountAggregate;

    @Field(() => License_typeAvgAggregate, {nullable:true})
    _avg?: License_typeAvgAggregate;

    @Field(() => License_typeSumAggregate, {nullable:true})
    _sum?: License_typeSumAggregate;

    @Field(() => License_typeMinAggregate, {nullable:true})
    _min?: License_typeMinAggregate;

    @Field(() => License_typeMaxAggregate, {nullable:true})
    _max?: License_typeMaxAggregate;
}

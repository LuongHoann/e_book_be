import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { License_ownershipCountAggregate } from './license-ownership-count-aggregate.output';
import { License_ownershipAvgAggregate } from './license-ownership-avg-aggregate.output';
import { License_ownershipSumAggregate } from './license-ownership-sum-aggregate.output';
import { License_ownershipMinAggregate } from './license-ownership-min-aggregate.output';
import { License_ownershipMaxAggregate } from './license-ownership-max-aggregate.output';

@ObjectType()
export class License_ownershipGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    user_id!: string;

    @Field(() => String, {nullable:false})
    license_id!: string;

    @Field(() => Int, {nullable:true})
    download_count?: number;

    @Field(() => Date, {nullable:false})
    expiration_date!: Date | string;

    @Field(() => License_ownershipCountAggregate, {nullable:true})
    _count?: License_ownershipCountAggregate;

    @Field(() => License_ownershipAvgAggregate, {nullable:true})
    _avg?: License_ownershipAvgAggregate;

    @Field(() => License_ownershipSumAggregate, {nullable:true})
    _sum?: License_ownershipSumAggregate;

    @Field(() => License_ownershipMinAggregate, {nullable:true})
    _min?: License_ownershipMinAggregate;

    @Field(() => License_ownershipMaxAggregate, {nullable:true})
    _max?: License_ownershipMaxAggregate;
}

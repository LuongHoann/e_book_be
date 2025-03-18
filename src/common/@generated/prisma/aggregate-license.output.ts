import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { LicenseCountAggregate } from './license-count-aggregate.output';
import { LicenseMinAggregate } from './license-min-aggregate.output';
import { LicenseMaxAggregate } from './license-max-aggregate.output';

@ObjectType()
export class AggregateLicense {

    @Field(() => LicenseCountAggregate, {nullable:true})
    _count?: LicenseCountAggregate;

    @Field(() => LicenseMinAggregate, {nullable:true})
    _min?: LicenseMinAggregate;

    @Field(() => LicenseMaxAggregate, {nullable:true})
    _max?: LicenseMaxAggregate;
}

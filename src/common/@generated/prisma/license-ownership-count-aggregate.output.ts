import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class License_ownershipCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    user_id!: number;

    @Field(() => Int, {nullable:false})
    license_id!: number;

    @Field(() => Int, {nullable:false})
    download_count!: number;

    @Field(() => Int, {nullable:false})
    expiration_date!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}

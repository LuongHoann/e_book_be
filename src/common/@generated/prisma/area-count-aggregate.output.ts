import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class AreaCountAggregate {

    @Field(() => Int, {nullable:false})
    area_name!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}

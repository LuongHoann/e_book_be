import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class PermissionSumAggregate {

    @Field(() => Int, {nullable:true})
    role_id?: number;
}

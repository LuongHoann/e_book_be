import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class RoleCount {

    @Field(() => Int, {nullable:false})
    permission!: number;

    @Field(() => Int, {nullable:false})
    user_user_roleTorole!: number;
}

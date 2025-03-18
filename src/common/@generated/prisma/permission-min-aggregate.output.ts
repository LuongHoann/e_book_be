import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class PermissionMinAggregate {

    @Field(() => Int, {nullable:true})
    role_id?: number;

    @Field(() => String, {nullable:true})
    url?: string;
}

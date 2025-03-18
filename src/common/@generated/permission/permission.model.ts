import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { role } from '../role/role.model';

@ObjectType()
export class permission {

    @Field(() => Int, {nullable:false})
    role_id!: number;

    @Field(() => String, {nullable:false})
    url!: string;

    @Field(() => role, {nullable:false})
    role?: role;
}

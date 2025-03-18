import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class permissionRole_idUrlCompoundUniqueInput {

    @Field(() => Int, {nullable:false})
    role_id!: number;

    @Field(() => String, {nullable:false})
    url!: string;
}

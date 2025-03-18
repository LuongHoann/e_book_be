import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class permissionUncheckedCreateInput {

    @Field(() => Int, {nullable:false})
    role_id!: number;

    @Field(() => String, {nullable:false})
    url!: string;
}

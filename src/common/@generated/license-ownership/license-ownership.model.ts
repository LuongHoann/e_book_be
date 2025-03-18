import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { license } from '../license/license.model';
import { user } from '../user/user.model';

@ObjectType()
export class license_ownership {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    user_id!: string;

    @Field(() => String, {nullable:false})
    license_id!: string;

    @Field(() => Int, {nullable:true})
    download_count!: number | null;

    @Field(() => Date, {nullable:false})
    expiration_date!: Date;

    @Field(() => license, {nullable:false})
    license?: license;

    @Field(() => user, {nullable:false})
    user?: user;
}

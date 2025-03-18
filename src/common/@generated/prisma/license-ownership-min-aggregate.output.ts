import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class License_ownershipMinAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    user_id?: string;

    @Field(() => String, {nullable:true})
    license_id?: string;

    @Field(() => Int, {nullable:true})
    download_count?: number;

    @Field(() => Date, {nullable:true})
    expiration_date?: Date | string;
}

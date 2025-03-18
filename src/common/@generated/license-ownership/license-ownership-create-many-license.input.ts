import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class license_ownershipCreateManyLicenseInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    user_id!: string;

    @Field(() => Int, {nullable:true})
    download_count?: number;

    @Field(() => Date, {nullable:false})
    expiration_date!: Date | string;
}

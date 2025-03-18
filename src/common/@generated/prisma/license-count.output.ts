import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class LicenseCount {

    @Field(() => Int, {nullable:false})
    license_ownership!: number;
}

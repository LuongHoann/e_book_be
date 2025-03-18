import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { userUpdateWithoutLicense_ownershipInput } from './user-update-without-license-ownership.input';
import { Type } from 'class-transformer';
import { userCreateWithoutLicense_ownershipInput } from './user-create-without-license-ownership.input';
import { userWhereInput } from './user-where.input';

@InputType()
export class userUpsertWithoutLicense_ownershipInput {

    @Field(() => userUpdateWithoutLicense_ownershipInput, {nullable:false})
    @Type(() => userUpdateWithoutLicense_ownershipInput)
    update!: userUpdateWithoutLicense_ownershipInput;

    @Field(() => userCreateWithoutLicense_ownershipInput, {nullable:false})
    @Type(() => userCreateWithoutLicense_ownershipInput)
    create!: userCreateWithoutLicense_ownershipInput;

    @Field(() => userWhereInput, {nullable:true})
    @Type(() => userWhereInput)
    where?: userWhereInput;
}

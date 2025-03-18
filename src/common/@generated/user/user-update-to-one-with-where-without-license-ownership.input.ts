import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { userWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { userUpdateWithoutLicense_ownershipInput } from './user-update-without-license-ownership.input';

@InputType()
export class userUpdateToOneWithWhereWithoutLicense_ownershipInput {

    @Field(() => userWhereInput, {nullable:true})
    @Type(() => userWhereInput)
    where?: userWhereInput;

    @Field(() => userUpdateWithoutLicense_ownershipInput, {nullable:false})
    @Type(() => userUpdateWithoutLicense_ownershipInput)
    data!: userUpdateWithoutLicense_ownershipInput;
}

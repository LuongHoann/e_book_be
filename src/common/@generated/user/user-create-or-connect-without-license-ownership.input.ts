import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { userWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { userCreateWithoutLicense_ownershipInput } from './user-create-without-license-ownership.input';

@InputType()
export class userCreateOrConnectWithoutLicense_ownershipInput {

    @Field(() => userWhereUniqueInput, {nullable:false})
    @Type(() => userWhereUniqueInput)
    where!: Prisma.AtLeast<userWhereUniqueInput, 'id' | 'email'>;

    @Field(() => userCreateWithoutLicense_ownershipInput, {nullable:false})
    @Type(() => userCreateWithoutLicense_ownershipInput)
    create!: userCreateWithoutLicense_ownershipInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { userCreateWithoutLicense_ownershipInput } from './user-create-without-license-ownership.input';
import { Type } from 'class-transformer';
import { userCreateOrConnectWithoutLicense_ownershipInput } from './user-create-or-connect-without-license-ownership.input';
import { Prisma } from '@prisma/client';
import { userWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class userCreateNestedOneWithoutLicense_ownershipInput {

    @Field(() => userCreateWithoutLicense_ownershipInput, {nullable:true})
    @Type(() => userCreateWithoutLicense_ownershipInput)
    create?: userCreateWithoutLicense_ownershipInput;

    @Field(() => userCreateOrConnectWithoutLicense_ownershipInput, {nullable:true})
    @Type(() => userCreateOrConnectWithoutLicense_ownershipInput)
    connectOrCreate?: userCreateOrConnectWithoutLicense_ownershipInput;

    @Field(() => userWhereUniqueInput, {nullable:true})
    @Type(() => userWhereUniqueInput)
    connect?: Prisma.AtLeast<userWhereUniqueInput, 'id' | 'email'>;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { license_ownershipCreateWithoutUserInput } from './license-ownership-create-without-user.input';
import { Type } from 'class-transformer';
import { license_ownershipCreateOrConnectWithoutUserInput } from './license-ownership-create-or-connect-without-user.input';
import { license_ownershipCreateManyUserInputEnvelope } from './license-ownership-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { license_ownershipWhereUniqueInput } from './license-ownership-where-unique.input';

@InputType()
export class license_ownershipUncheckedCreateNestedManyWithoutUserInput {

    @Field(() => [license_ownershipCreateWithoutUserInput], {nullable:true})
    @Type(() => license_ownershipCreateWithoutUserInput)
    create?: Array<license_ownershipCreateWithoutUserInput>;

    @Field(() => [license_ownershipCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => license_ownershipCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<license_ownershipCreateOrConnectWithoutUserInput>;

    @Field(() => license_ownershipCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => license_ownershipCreateManyUserInputEnvelope)
    createMany?: license_ownershipCreateManyUserInputEnvelope;

    @Field(() => [license_ownershipWhereUniqueInput], {nullable:true})
    @Type(() => license_ownershipWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<license_ownershipWhereUniqueInput, 'id'>>;
}

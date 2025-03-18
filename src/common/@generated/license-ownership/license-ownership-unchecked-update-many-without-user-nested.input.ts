import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { license_ownershipCreateWithoutUserInput } from './license-ownership-create-without-user.input';
import { Type } from 'class-transformer';
import { license_ownershipCreateOrConnectWithoutUserInput } from './license-ownership-create-or-connect-without-user.input';
import { license_ownershipUpsertWithWhereUniqueWithoutUserInput } from './license-ownership-upsert-with-where-unique-without-user.input';
import { license_ownershipCreateManyUserInputEnvelope } from './license-ownership-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { license_ownershipWhereUniqueInput } from './license-ownership-where-unique.input';
import { license_ownershipUpdateWithWhereUniqueWithoutUserInput } from './license-ownership-update-with-where-unique-without-user.input';
import { license_ownershipUpdateManyWithWhereWithoutUserInput } from './license-ownership-update-many-with-where-without-user.input';
import { license_ownershipScalarWhereInput } from './license-ownership-scalar-where.input';

@InputType()
export class license_ownershipUncheckedUpdateManyWithoutUserNestedInput {

    @Field(() => [license_ownershipCreateWithoutUserInput], {nullable:true})
    @Type(() => license_ownershipCreateWithoutUserInput)
    create?: Array<license_ownershipCreateWithoutUserInput>;

    @Field(() => [license_ownershipCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => license_ownershipCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<license_ownershipCreateOrConnectWithoutUserInput>;

    @Field(() => [license_ownershipUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => license_ownershipUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<license_ownershipUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => license_ownershipCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => license_ownershipCreateManyUserInputEnvelope)
    createMany?: license_ownershipCreateManyUserInputEnvelope;

    @Field(() => [license_ownershipWhereUniqueInput], {nullable:true})
    @Type(() => license_ownershipWhereUniqueInput)
    set?: Array<Prisma.AtLeast<license_ownershipWhereUniqueInput, 'id'>>;

    @Field(() => [license_ownershipWhereUniqueInput], {nullable:true})
    @Type(() => license_ownershipWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<license_ownershipWhereUniqueInput, 'id'>>;

    @Field(() => [license_ownershipWhereUniqueInput], {nullable:true})
    @Type(() => license_ownershipWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<license_ownershipWhereUniqueInput, 'id'>>;

    @Field(() => [license_ownershipWhereUniqueInput], {nullable:true})
    @Type(() => license_ownershipWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<license_ownershipWhereUniqueInput, 'id'>>;

    @Field(() => [license_ownershipUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => license_ownershipUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<license_ownershipUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [license_ownershipUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => license_ownershipUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<license_ownershipUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [license_ownershipScalarWhereInput], {nullable:true})
    @Type(() => license_ownershipScalarWhereInput)
    deleteMany?: Array<license_ownershipScalarWhereInput>;
}

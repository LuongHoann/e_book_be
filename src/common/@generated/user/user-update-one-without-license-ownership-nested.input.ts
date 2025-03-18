import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { userCreateWithoutLicense_ownershipInput } from './user-create-without-license-ownership.input';
import { Type } from 'class-transformer';
import { userCreateOrConnectWithoutLicense_ownershipInput } from './user-create-or-connect-without-license-ownership.input';
import { userUpsertWithoutLicense_ownershipInput } from './user-upsert-without-license-ownership.input';
import { userWhereInput } from './user-where.input';
import { Prisma } from '@prisma/client';
import { userWhereUniqueInput } from './user-where-unique.input';
import { userUpdateToOneWithWhereWithoutLicense_ownershipInput } from './user-update-to-one-with-where-without-license-ownership.input';

@InputType()
export class userUpdateOneWithoutLicense_ownershipNestedInput {

    @Field(() => userCreateWithoutLicense_ownershipInput, {nullable:true})
    @Type(() => userCreateWithoutLicense_ownershipInput)
    create?: userCreateWithoutLicense_ownershipInput;

    @Field(() => userCreateOrConnectWithoutLicense_ownershipInput, {nullable:true})
    @Type(() => userCreateOrConnectWithoutLicense_ownershipInput)
    connectOrCreate?: userCreateOrConnectWithoutLicense_ownershipInput;

    @Field(() => userUpsertWithoutLicense_ownershipInput, {nullable:true})
    @Type(() => userUpsertWithoutLicense_ownershipInput)
    upsert?: userUpsertWithoutLicense_ownershipInput;

    @Field(() => userWhereInput, {nullable:true})
    @Type(() => userWhereInput)
    disconnect?: userWhereInput;

    @Field(() => userWhereInput, {nullable:true})
    @Type(() => userWhereInput)
    delete?: userWhereInput;

    @Field(() => userWhereUniqueInput, {nullable:true})
    @Type(() => userWhereUniqueInput)
    connect?: Prisma.AtLeast<userWhereUniqueInput, 'id'>;

    @Field(() => userUpdateToOneWithWhereWithoutLicense_ownershipInput, {nullable:true})
    @Type(() => userUpdateToOneWithWhereWithoutLicense_ownershipInput)
    update?: userUpdateToOneWithWhereWithoutLicense_ownershipInput;
}

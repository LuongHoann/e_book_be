import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { licenseCreateWithoutLicense_ownershipInput } from './license-create-without-license-ownership.input';
import { Type } from 'class-transformer';
import { licenseCreateOrConnectWithoutLicense_ownershipInput } from './license-create-or-connect-without-license-ownership.input';
import { licenseUpsertWithoutLicense_ownershipInput } from './license-upsert-without-license-ownership.input';
import { Prisma } from '@prisma/client';
import { licenseWhereUniqueInput } from './license-where-unique.input';
import { licenseUpdateToOneWithWhereWithoutLicense_ownershipInput } from './license-update-to-one-with-where-without-license-ownership.input';

@InputType()
export class licenseUpdateOneRequiredWithoutLicense_ownershipNestedInput {

    @Field(() => licenseCreateWithoutLicense_ownershipInput, {nullable:true})
    @Type(() => licenseCreateWithoutLicense_ownershipInput)
    create?: licenseCreateWithoutLicense_ownershipInput;

    @Field(() => licenseCreateOrConnectWithoutLicense_ownershipInput, {nullable:true})
    @Type(() => licenseCreateOrConnectWithoutLicense_ownershipInput)
    connectOrCreate?: licenseCreateOrConnectWithoutLicense_ownershipInput;

    @Field(() => licenseUpsertWithoutLicense_ownershipInput, {nullable:true})
    @Type(() => licenseUpsertWithoutLicense_ownershipInput)
    upsert?: licenseUpsertWithoutLicense_ownershipInput;

    @Field(() => licenseWhereUniqueInput, {nullable:true})
    @Type(() => licenseWhereUniqueInput)
    connect?: Prisma.AtLeast<licenseWhereUniqueInput, 'id'>;

    @Field(() => licenseUpdateToOneWithWhereWithoutLicense_ownershipInput, {nullable:true})
    @Type(() => licenseUpdateToOneWithWhereWithoutLicense_ownershipInput)
    update?: licenseUpdateToOneWithWhereWithoutLicense_ownershipInput;
}

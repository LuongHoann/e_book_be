import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { licenseCreateWithoutLicense_typeInput } from './license-create-without-license-type.input';
import { Type } from 'class-transformer';
import { licenseCreateOrConnectWithoutLicense_typeInput } from './license-create-or-connect-without-license-type.input';
import { licenseCreateManyLicense_typeInputEnvelope } from './license-create-many-license-type-input-envelope.input';
import { Prisma } from '@prisma/client';
import { licenseWhereUniqueInput } from './license-where-unique.input';

@InputType()
export class licenseCreateNestedManyWithoutLicense_typeInput {

    @Field(() => [licenseCreateWithoutLicense_typeInput], {nullable:true})
    @Type(() => licenseCreateWithoutLicense_typeInput)
    create?: Array<licenseCreateWithoutLicense_typeInput>;

    @Field(() => [licenseCreateOrConnectWithoutLicense_typeInput], {nullable:true})
    @Type(() => licenseCreateOrConnectWithoutLicense_typeInput)
    connectOrCreate?: Array<licenseCreateOrConnectWithoutLicense_typeInput>;

    @Field(() => licenseCreateManyLicense_typeInputEnvelope, {nullable:true})
    @Type(() => licenseCreateManyLicense_typeInputEnvelope)
    createMany?: licenseCreateManyLicense_typeInputEnvelope;

    @Field(() => [licenseWhereUniqueInput], {nullable:true})
    @Type(() => licenseWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<licenseWhereUniqueInput, 'id'>>;
}

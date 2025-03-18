import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { licenseCreateWithoutLicense_typeInput } from './license-create-without-license-type.input';
import { Type } from 'class-transformer';
import { licenseCreateOrConnectWithoutLicense_typeInput } from './license-create-or-connect-without-license-type.input';
import { licenseUpsertWithWhereUniqueWithoutLicense_typeInput } from './license-upsert-with-where-unique-without-license-type.input';
import { licenseCreateManyLicense_typeInputEnvelope } from './license-create-many-license-type-input-envelope.input';
import { Prisma } from '@prisma/client';
import { licenseWhereUniqueInput } from './license-where-unique.input';
import { licenseUpdateWithWhereUniqueWithoutLicense_typeInput } from './license-update-with-where-unique-without-license-type.input';
import { licenseUpdateManyWithWhereWithoutLicense_typeInput } from './license-update-many-with-where-without-license-type.input';
import { licenseScalarWhereInput } from './license-scalar-where.input';

@InputType()
export class licenseUpdateManyWithoutLicense_typeNestedInput {

    @Field(() => [licenseCreateWithoutLicense_typeInput], {nullable:true})
    @Type(() => licenseCreateWithoutLicense_typeInput)
    create?: Array<licenseCreateWithoutLicense_typeInput>;

    @Field(() => [licenseCreateOrConnectWithoutLicense_typeInput], {nullable:true})
    @Type(() => licenseCreateOrConnectWithoutLicense_typeInput)
    connectOrCreate?: Array<licenseCreateOrConnectWithoutLicense_typeInput>;

    @Field(() => [licenseUpsertWithWhereUniqueWithoutLicense_typeInput], {nullable:true})
    @Type(() => licenseUpsertWithWhereUniqueWithoutLicense_typeInput)
    upsert?: Array<licenseUpsertWithWhereUniqueWithoutLicense_typeInput>;

    @Field(() => licenseCreateManyLicense_typeInputEnvelope, {nullable:true})
    @Type(() => licenseCreateManyLicense_typeInputEnvelope)
    createMany?: licenseCreateManyLicense_typeInputEnvelope;

    @Field(() => [licenseWhereUniqueInput], {nullable:true})
    @Type(() => licenseWhereUniqueInput)
    set?: Array<Prisma.AtLeast<licenseWhereUniqueInput, 'id'>>;

    @Field(() => [licenseWhereUniqueInput], {nullable:true})
    @Type(() => licenseWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<licenseWhereUniqueInput, 'id'>>;

    @Field(() => [licenseWhereUniqueInput], {nullable:true})
    @Type(() => licenseWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<licenseWhereUniqueInput, 'id'>>;

    @Field(() => [licenseWhereUniqueInput], {nullable:true})
    @Type(() => licenseWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<licenseWhereUniqueInput, 'id'>>;

    @Field(() => [licenseUpdateWithWhereUniqueWithoutLicense_typeInput], {nullable:true})
    @Type(() => licenseUpdateWithWhereUniqueWithoutLicense_typeInput)
    update?: Array<licenseUpdateWithWhereUniqueWithoutLicense_typeInput>;

    @Field(() => [licenseUpdateManyWithWhereWithoutLicense_typeInput], {nullable:true})
    @Type(() => licenseUpdateManyWithWhereWithoutLicense_typeInput)
    updateMany?: Array<licenseUpdateManyWithWhereWithoutLicense_typeInput>;

    @Field(() => [licenseScalarWhereInput], {nullable:true})
    @Type(() => licenseScalarWhereInput)
    deleteMany?: Array<licenseScalarWhereInput>;
}

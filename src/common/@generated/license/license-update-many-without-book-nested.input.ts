import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { licenseCreateWithoutBookInput } from './license-create-without-book.input';
import { Type } from 'class-transformer';
import { licenseCreateOrConnectWithoutBookInput } from './license-create-or-connect-without-book.input';
import { licenseUpsertWithWhereUniqueWithoutBookInput } from './license-upsert-with-where-unique-without-book.input';
import { licenseCreateManyBookInputEnvelope } from './license-create-many-book-input-envelope.input';
import { Prisma } from '@prisma/client';
import { licenseWhereUniqueInput } from './license-where-unique.input';
import { licenseUpdateWithWhereUniqueWithoutBookInput } from './license-update-with-where-unique-without-book.input';
import { licenseUpdateManyWithWhereWithoutBookInput } from './license-update-many-with-where-without-book.input';
import { licenseScalarWhereInput } from './license-scalar-where.input';

@InputType()
export class licenseUpdateManyWithoutBookNestedInput {

    @Field(() => [licenseCreateWithoutBookInput], {nullable:true})
    @Type(() => licenseCreateWithoutBookInput)
    create?: Array<licenseCreateWithoutBookInput>;

    @Field(() => [licenseCreateOrConnectWithoutBookInput], {nullable:true})
    @Type(() => licenseCreateOrConnectWithoutBookInput)
    connectOrCreate?: Array<licenseCreateOrConnectWithoutBookInput>;

    @Field(() => [licenseUpsertWithWhereUniqueWithoutBookInput], {nullable:true})
    @Type(() => licenseUpsertWithWhereUniqueWithoutBookInput)
    upsert?: Array<licenseUpsertWithWhereUniqueWithoutBookInput>;

    @Field(() => licenseCreateManyBookInputEnvelope, {nullable:true})
    @Type(() => licenseCreateManyBookInputEnvelope)
    createMany?: licenseCreateManyBookInputEnvelope;

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

    @Field(() => [licenseUpdateWithWhereUniqueWithoutBookInput], {nullable:true})
    @Type(() => licenseUpdateWithWhereUniqueWithoutBookInput)
    update?: Array<licenseUpdateWithWhereUniqueWithoutBookInput>;

    @Field(() => [licenseUpdateManyWithWhereWithoutBookInput], {nullable:true})
    @Type(() => licenseUpdateManyWithWhereWithoutBookInput)
    updateMany?: Array<licenseUpdateManyWithWhereWithoutBookInput>;

    @Field(() => [licenseScalarWhereInput], {nullable:true})
    @Type(() => licenseScalarWhereInput)
    deleteMany?: Array<licenseScalarWhereInput>;
}

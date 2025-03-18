import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { licenseCreateWithoutBookInput } from './license-create-without-book.input';
import { Type } from 'class-transformer';
import { licenseCreateOrConnectWithoutBookInput } from './license-create-or-connect-without-book.input';
import { licenseCreateManyBookInputEnvelope } from './license-create-many-book-input-envelope.input';
import { Prisma } from '@prisma/client';
import { licenseWhereUniqueInput } from './license-where-unique.input';

@InputType()
export class licenseUncheckedCreateNestedManyWithoutBookInput {

    @Field(() => [licenseCreateWithoutBookInput], {nullable:true})
    @Type(() => licenseCreateWithoutBookInput)
    create?: Array<licenseCreateWithoutBookInput>;

    @Field(() => [licenseCreateOrConnectWithoutBookInput], {nullable:true})
    @Type(() => licenseCreateOrConnectWithoutBookInput)
    connectOrCreate?: Array<licenseCreateOrConnectWithoutBookInput>;

    @Field(() => licenseCreateManyBookInputEnvelope, {nullable:true})
    @Type(() => licenseCreateManyBookInputEnvelope)
    createMany?: licenseCreateManyBookInputEnvelope;

    @Field(() => [licenseWhereUniqueInput], {nullable:true})
    @Type(() => licenseWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<licenseWhereUniqueInput, 'id'>>;
}

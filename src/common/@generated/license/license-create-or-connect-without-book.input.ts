import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { licenseWhereUniqueInput } from './license-where-unique.input';
import { Type } from 'class-transformer';
import { licenseCreateWithoutBookInput } from './license-create-without-book.input';

@InputType()
export class licenseCreateOrConnectWithoutBookInput {

    @Field(() => licenseWhereUniqueInput, {nullable:false})
    @Type(() => licenseWhereUniqueInput)
    where!: Prisma.AtLeast<licenseWhereUniqueInput, 'id'>;

    @Field(() => licenseCreateWithoutBookInput, {nullable:false})
    @Type(() => licenseCreateWithoutBookInput)
    create!: licenseCreateWithoutBookInput;
}

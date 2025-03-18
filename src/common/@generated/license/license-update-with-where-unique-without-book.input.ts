import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { licenseWhereUniqueInput } from './license-where-unique.input';
import { Type } from 'class-transformer';
import { licenseUpdateWithoutBookInput } from './license-update-without-book.input';

@InputType()
export class licenseUpdateWithWhereUniqueWithoutBookInput {

    @Field(() => licenseWhereUniqueInput, {nullable:false})
    @Type(() => licenseWhereUniqueInput)
    where!: Prisma.AtLeast<licenseWhereUniqueInput, 'id'>;

    @Field(() => licenseUpdateWithoutBookInput, {nullable:false})
    @Type(() => licenseUpdateWithoutBookInput)
    data!: licenseUpdateWithoutBookInput;
}

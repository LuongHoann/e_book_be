import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { bookWhereUniqueInput } from './book-where-unique.input';
import { Type } from 'class-transformer';
import { bookCreateWithoutLicenseInput } from './book-create-without-license.input';

@InputType()
export class bookCreateOrConnectWithoutLicenseInput {

    @Field(() => bookWhereUniqueInput, {nullable:false})
    @Type(() => bookWhereUniqueInput)
    where!: Prisma.AtLeast<bookWhereUniqueInput, 'id' | 'isbn'>;

    @Field(() => bookCreateWithoutLicenseInput, {nullable:false})
    @Type(() => bookCreateWithoutLicenseInput)
    create!: bookCreateWithoutLicenseInput;
}

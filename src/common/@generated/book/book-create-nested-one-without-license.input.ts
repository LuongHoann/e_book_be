import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { bookCreateWithoutLicenseInput } from './book-create-without-license.input';
import { Type } from 'class-transformer';
import { bookCreateOrConnectWithoutLicenseInput } from './book-create-or-connect-without-license.input';
import { Prisma } from '@prisma/client';
import { bookWhereUniqueInput } from './book-where-unique.input';

@InputType()
export class bookCreateNestedOneWithoutLicenseInput {

    @Field(() => bookCreateWithoutLicenseInput, {nullable:true})
    @Type(() => bookCreateWithoutLicenseInput)
    create?: bookCreateWithoutLicenseInput;

    @Field(() => bookCreateOrConnectWithoutLicenseInput, {nullable:true})
    @Type(() => bookCreateOrConnectWithoutLicenseInput)
    connectOrCreate?: bookCreateOrConnectWithoutLicenseInput;

    @Field(() => bookWhereUniqueInput, {nullable:true})
    @Type(() => bookWhereUniqueInput)
    connect?: Prisma.AtLeast<bookWhereUniqueInput, 'id' | 'isbn'>;
}

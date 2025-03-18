import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { bookCreateWithoutLicenseInput } from './book-create-without-license.input';
import { Type } from 'class-transformer';
import { bookCreateOrConnectWithoutLicenseInput } from './book-create-or-connect-without-license.input';
import { bookUpsertWithoutLicenseInput } from './book-upsert-without-license.input';
import { bookWhereInput } from './book-where.input';
import { Prisma } from '@prisma/client';
import { bookWhereUniqueInput } from './book-where-unique.input';
import { bookUpdateToOneWithWhereWithoutLicenseInput } from './book-update-to-one-with-where-without-license.input';

@InputType()
export class bookUpdateOneWithoutLicenseNestedInput {

    @Field(() => bookCreateWithoutLicenseInput, {nullable:true})
    @Type(() => bookCreateWithoutLicenseInput)
    create?: bookCreateWithoutLicenseInput;

    @Field(() => bookCreateOrConnectWithoutLicenseInput, {nullable:true})
    @Type(() => bookCreateOrConnectWithoutLicenseInput)
    connectOrCreate?: bookCreateOrConnectWithoutLicenseInput;

    @Field(() => bookUpsertWithoutLicenseInput, {nullable:true})
    @Type(() => bookUpsertWithoutLicenseInput)
    upsert?: bookUpsertWithoutLicenseInput;

    @Field(() => bookWhereInput, {nullable:true})
    @Type(() => bookWhereInput)
    disconnect?: bookWhereInput;

    @Field(() => bookWhereInput, {nullable:true})
    @Type(() => bookWhereInput)
    delete?: bookWhereInput;

    @Field(() => bookWhereUniqueInput, {nullable:true})
    @Type(() => bookWhereUniqueInput)
    connect?: Prisma.AtLeast<bookWhereUniqueInput, 'id' | 'isbn'>;

    @Field(() => bookUpdateToOneWithWhereWithoutLicenseInput, {nullable:true})
    @Type(() => bookUpdateToOneWithWhereWithoutLicenseInput)
    update?: bookUpdateToOneWithWhereWithoutLicenseInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { areaCreateWithoutDiscount_codeInput } from './area-create-without-discount-code.input';
import { Type } from 'class-transformer';
import { areaCreateOrConnectWithoutDiscount_codeInput } from './area-create-or-connect-without-discount-code.input';
import { Prisma } from '@prisma/client';
import { areaWhereUniqueInput } from './area-where-unique.input';

@InputType()
export class areaCreateNestedOneWithoutDiscount_codeInput {

    @Field(() => areaCreateWithoutDiscount_codeInput, {nullable:true})
    @Type(() => areaCreateWithoutDiscount_codeInput)
    create?: areaCreateWithoutDiscount_codeInput;

    @Field(() => areaCreateOrConnectWithoutDiscount_codeInput, {nullable:true})
    @Type(() => areaCreateOrConnectWithoutDiscount_codeInput)
    connectOrCreate?: areaCreateOrConnectWithoutDiscount_codeInput;

    @Field(() => areaWhereUniqueInput, {nullable:true})
    @Type(() => areaWhereUniqueInput)
    connect?: Prisma.AtLeast<areaWhereUniqueInput, 'code'>;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { areaCreateWithoutDiscount_codeInput } from './area-create-without-discount-code.input';
import { Type } from 'class-transformer';
import { areaCreateOrConnectWithoutDiscount_codeInput } from './area-create-or-connect-without-discount-code.input';
import { areaUpsertWithoutDiscount_codeInput } from './area-upsert-without-discount-code.input';
import { areaWhereInput } from './area-where.input';
import { Prisma } from '@prisma/client';
import { areaWhereUniqueInput } from './area-where-unique.input';
import { areaUpdateToOneWithWhereWithoutDiscount_codeInput } from './area-update-to-one-with-where-without-discount-code.input';

@InputType()
export class areaUpdateOneWithoutDiscount_codeNestedInput {

    @Field(() => areaCreateWithoutDiscount_codeInput, {nullable:true})
    @Type(() => areaCreateWithoutDiscount_codeInput)
    create?: areaCreateWithoutDiscount_codeInput;

    @Field(() => areaCreateOrConnectWithoutDiscount_codeInput, {nullable:true})
    @Type(() => areaCreateOrConnectWithoutDiscount_codeInput)
    connectOrCreate?: areaCreateOrConnectWithoutDiscount_codeInput;

    @Field(() => areaUpsertWithoutDiscount_codeInput, {nullable:true})
    @Type(() => areaUpsertWithoutDiscount_codeInput)
    upsert?: areaUpsertWithoutDiscount_codeInput;

    @Field(() => areaWhereInput, {nullable:true})
    @Type(() => areaWhereInput)
    disconnect?: areaWhereInput;

    @Field(() => areaWhereInput, {nullable:true})
    @Type(() => areaWhereInput)
    delete?: areaWhereInput;

    @Field(() => areaWhereUniqueInput, {nullable:true})
    @Type(() => areaWhereUniqueInput)
    connect?: Prisma.AtLeast<areaWhereUniqueInput, 'area_name'>;

    @Field(() => areaUpdateToOneWithWhereWithoutDiscount_codeInput, {nullable:true})
    @Type(() => areaUpdateToOneWithWhereWithoutDiscount_codeInput)
    update?: areaUpdateToOneWithWhereWithoutDiscount_codeInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { areaWhereUniqueInput } from './area-where-unique.input';
import { Type } from 'class-transformer';
import { areaCreateWithoutDiscount_codeInput } from './area-create-without-discount-code.input';

@InputType()
export class areaCreateOrConnectWithoutDiscount_codeInput {

    @Field(() => areaWhereUniqueInput, {nullable:false})
    @Type(() => areaWhereUniqueInput)
    where!: Prisma.AtLeast<areaWhereUniqueInput, 'code'>;

    @Field(() => areaCreateWithoutDiscount_codeInput, {nullable:false})
    @Type(() => areaCreateWithoutDiscount_codeInput)
    create!: areaCreateWithoutDiscount_codeInput;
}

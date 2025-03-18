import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { areaUpdateWithoutDiscount_codeInput } from './area-update-without-discount-code.input';
import { Type } from 'class-transformer';
import { areaCreateWithoutDiscount_codeInput } from './area-create-without-discount-code.input';
import { areaWhereInput } from './area-where.input';

@InputType()
export class areaUpsertWithoutDiscount_codeInput {

    @Field(() => areaUpdateWithoutDiscount_codeInput, {nullable:false})
    @Type(() => areaUpdateWithoutDiscount_codeInput)
    update!: areaUpdateWithoutDiscount_codeInput;

    @Field(() => areaCreateWithoutDiscount_codeInput, {nullable:false})
    @Type(() => areaCreateWithoutDiscount_codeInput)
    create!: areaCreateWithoutDiscount_codeInput;

    @Field(() => areaWhereInput, {nullable:true})
    @Type(() => areaWhereInput)
    where?: areaWhereInput;
}

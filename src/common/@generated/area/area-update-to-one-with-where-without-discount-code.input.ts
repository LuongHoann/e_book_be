import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { areaWhereInput } from './area-where.input';
import { Type } from 'class-transformer';
import { areaUpdateWithoutDiscount_codeInput } from './area-update-without-discount-code.input';

@InputType()
export class areaUpdateToOneWithWhereWithoutDiscount_codeInput {

    @Field(() => areaWhereInput, {nullable:true})
    @Type(() => areaWhereInput)
    where?: areaWhereInput;

    @Field(() => areaUpdateWithoutDiscount_codeInput, {nullable:false})
    @Type(() => areaUpdateWithoutDiscount_codeInput)
    data!: areaUpdateWithoutDiscount_codeInput;
}

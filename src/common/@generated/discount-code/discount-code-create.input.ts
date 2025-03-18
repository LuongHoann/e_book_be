import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { transformToDecimal } from 'prisma-graphql-type-decimal';
import { Transform } from 'class-transformer';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';
import { bookCreateNestedManyWithoutDiscount_codeInput } from '../book/book-create-nested-many-without-discount-code.input';
import { areaCreateNestedOneWithoutDiscount_codeInput } from '../area/area-create-nested-one-without-discount-code.input';

@InputType()
export class discount_codeCreateInput {

    @Field(() => String, {nullable:true})
    discount_code_name?: string;

    @Field(() => GraphQLDecimal, {nullable:true})
    @Type(() => Object)
    @Transform(transformToDecimal)
    discount_value?: Decimal;

    @Field(() => Int, {nullable:true})
    discount_value_percent?: number;

    @Field(() => bookCreateNestedManyWithoutDiscount_codeInput, {nullable:true})
    @Type(() => bookCreateNestedManyWithoutDiscount_codeInput)
    book?: bookCreateNestedManyWithoutDiscount_codeInput;

    @Field(() => areaCreateNestedOneWithoutDiscount_codeInput, {nullable:true})
    @Type(() => areaCreateNestedOneWithoutDiscount_codeInput)
    area?: areaCreateNestedOneWithoutDiscount_codeInput;
}

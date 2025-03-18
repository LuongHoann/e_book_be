import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { transformToDecimal } from 'prisma-graphql-type-decimal';
import { Transform } from 'class-transformer';
import { Type } from 'class-transformer';
import { bookUncheckedCreateNestedManyWithoutDiscount_codeInput } from '../book/book-unchecked-create-nested-many-without-discount-code.input';

@InputType()
export class discount_codeUncheckedCreateWithoutAreaInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    discount_code_name?: string;

    @Field(() => GraphQLDecimal, {nullable:true})
    @Type(() => Object)
    @Transform(transformToDecimal)
    discount_value?: Decimal;

    @Field(() => Int, {nullable:true})
    discount_value_percent?: number;

    @Field(() => bookUncheckedCreateNestedManyWithoutDiscount_codeInput, {nullable:true})
    @Type(() => bookUncheckedCreateNestedManyWithoutDiscount_codeInput)
    book?: bookUncheckedCreateNestedManyWithoutDiscount_codeInput;
}

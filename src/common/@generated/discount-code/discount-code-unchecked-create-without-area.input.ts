import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { transformToDecimal } from 'prisma-graphql-type-decimal';
import { Transform } from 'class-transformer';
import { Type } from 'class-transformer';
import { book_discountUncheckedCreateNestedManyWithoutDiscount_codeInput } from '../book-discount/book-discount-unchecked-create-nested-many-without-discount-code.input';

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

    @Field(() => book_discountUncheckedCreateNestedManyWithoutDiscount_codeInput, {nullable:true})
    @Type(() => book_discountUncheckedCreateNestedManyWithoutDiscount_codeInput)
    book_discount?: book_discountUncheckedCreateNestedManyWithoutDiscount_codeInput;
}

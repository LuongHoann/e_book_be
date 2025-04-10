import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { transformToDecimal } from 'prisma-graphql-type-decimal';
import { Transform } from 'class-transformer';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';
import { book_discountCreateNestedManyWithoutDiscount_codeInput } from '../book-discount/book-discount-create-nested-many-without-discount-code.input';

@InputType()
export class discount_codeCreateWithoutAreaInput {

    @Field(() => String, {nullable:true})
    discount_code_name?: string;

    @Field(() => GraphQLDecimal, {nullable:true})
    @Type(() => Object)
    @Transform(transformToDecimal)
    discount_value?: Decimal;

    @Field(() => Int, {nullable:true})
    discount_value_percent?: number;

    @Field(() => book_discountCreateNestedManyWithoutDiscount_codeInput, {nullable:true})
    @Type(() => book_discountCreateNestedManyWithoutDiscount_codeInput)
    book_discount?: book_discountCreateNestedManyWithoutDiscount_codeInput;
}

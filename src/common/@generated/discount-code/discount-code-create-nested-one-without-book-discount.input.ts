import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { discount_codeCreateWithoutBook_discountInput } from './discount-code-create-without-book-discount.input';
import { Type } from 'class-transformer';
import { discount_codeCreateOrConnectWithoutBook_discountInput } from './discount-code-create-or-connect-without-book-discount.input';
import { Prisma } from '@prisma/client';
import { discount_codeWhereUniqueInput } from './discount-code-where-unique.input';

@InputType()
export class discount_codeCreateNestedOneWithoutBook_discountInput {

    @Field(() => discount_codeCreateWithoutBook_discountInput, {nullable:true})
    @Type(() => discount_codeCreateWithoutBook_discountInput)
    create?: discount_codeCreateWithoutBook_discountInput;

    @Field(() => discount_codeCreateOrConnectWithoutBook_discountInput, {nullable:true})
    @Type(() => discount_codeCreateOrConnectWithoutBook_discountInput)
    connectOrCreate?: discount_codeCreateOrConnectWithoutBook_discountInput;

    @Field(() => discount_codeWhereUniqueInput, {nullable:true})
    @Type(() => discount_codeWhereUniqueInput)
    connect?: Prisma.AtLeast<discount_codeWhereUniqueInput, 'id'>;
}

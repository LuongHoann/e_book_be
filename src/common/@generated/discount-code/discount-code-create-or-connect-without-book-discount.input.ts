import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { discount_codeWhereUniqueInput } from './discount-code-where-unique.input';
import { Type } from 'class-transformer';
import { discount_codeCreateWithoutBook_discountInput } from './discount-code-create-without-book-discount.input';

@InputType()
export class discount_codeCreateOrConnectWithoutBook_discountInput {

    @Field(() => discount_codeWhereUniqueInput, {nullable:false})
    @Type(() => discount_codeWhereUniqueInput)
    where!: Prisma.AtLeast<discount_codeWhereUniqueInput, 'id'>;

    @Field(() => discount_codeCreateWithoutBook_discountInput, {nullable:false})
    @Type(() => discount_codeCreateWithoutBook_discountInput)
    create!: discount_codeCreateWithoutBook_discountInput;
}

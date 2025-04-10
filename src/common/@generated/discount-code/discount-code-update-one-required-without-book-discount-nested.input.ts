import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { discount_codeCreateWithoutBook_discountInput } from './discount-code-create-without-book-discount.input';
import { Type } from 'class-transformer';
import { discount_codeCreateOrConnectWithoutBook_discountInput } from './discount-code-create-or-connect-without-book-discount.input';
import { discount_codeUpsertWithoutBook_discountInput } from './discount-code-upsert-without-book-discount.input';
import { Prisma } from '@prisma/client';
import { discount_codeWhereUniqueInput } from './discount-code-where-unique.input';
import { discount_codeUpdateToOneWithWhereWithoutBook_discountInput } from './discount-code-update-to-one-with-where-without-book-discount.input';

@InputType()
export class discount_codeUpdateOneRequiredWithoutBook_discountNestedInput {

    @Field(() => discount_codeCreateWithoutBook_discountInput, {nullable:true})
    @Type(() => discount_codeCreateWithoutBook_discountInput)
    create?: discount_codeCreateWithoutBook_discountInput;

    @Field(() => discount_codeCreateOrConnectWithoutBook_discountInput, {nullable:true})
    @Type(() => discount_codeCreateOrConnectWithoutBook_discountInput)
    connectOrCreate?: discount_codeCreateOrConnectWithoutBook_discountInput;

    @Field(() => discount_codeUpsertWithoutBook_discountInput, {nullable:true})
    @Type(() => discount_codeUpsertWithoutBook_discountInput)
    upsert?: discount_codeUpsertWithoutBook_discountInput;

    @Field(() => discount_codeWhereUniqueInput, {nullable:true})
    @Type(() => discount_codeWhereUniqueInput)
    connect?: Prisma.AtLeast<discount_codeWhereUniqueInput, 'id'>;

    @Field(() => discount_codeUpdateToOneWithWhereWithoutBook_discountInput, {nullable:true})
    @Type(() => discount_codeUpdateToOneWithWhereWithoutBook_discountInput)
    update?: discount_codeUpdateToOneWithWhereWithoutBook_discountInput;
}

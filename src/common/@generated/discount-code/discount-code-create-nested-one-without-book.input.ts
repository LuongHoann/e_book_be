import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { discount_codeCreateWithoutBookInput } from './discount-code-create-without-book.input';
import { Type } from 'class-transformer';
import { discount_codeCreateOrConnectWithoutBookInput } from './discount-code-create-or-connect-without-book.input';
import { Prisma } from '@prisma/client';
import { discount_codeWhereUniqueInput } from './discount-code-where-unique.input';

@InputType()
export class discount_codeCreateNestedOneWithoutBookInput {

    @Field(() => discount_codeCreateWithoutBookInput, {nullable:true})
    @Type(() => discount_codeCreateWithoutBookInput)
    create?: discount_codeCreateWithoutBookInput;

    @Field(() => discount_codeCreateOrConnectWithoutBookInput, {nullable:true})
    @Type(() => discount_codeCreateOrConnectWithoutBookInput)
    connectOrCreate?: discount_codeCreateOrConnectWithoutBookInput;

    @Field(() => discount_codeWhereUniqueInput, {nullable:true})
    @Type(() => discount_codeWhereUniqueInput)
    connect?: Prisma.AtLeast<discount_codeWhereUniqueInput, 'id'>;
}

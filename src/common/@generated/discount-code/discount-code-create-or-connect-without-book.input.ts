import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { discount_codeWhereUniqueInput } from './discount-code-where-unique.input';
import { Type } from 'class-transformer';
import { discount_codeCreateWithoutBookInput } from './discount-code-create-without-book.input';

@InputType()
export class discount_codeCreateOrConnectWithoutBookInput {

    @Field(() => discount_codeWhereUniqueInput, {nullable:false})
    @Type(() => discount_codeWhereUniqueInput)
    where!: Prisma.AtLeast<discount_codeWhereUniqueInput, 'id'>;

    @Field(() => discount_codeCreateWithoutBookInput, {nullable:false})
    @Type(() => discount_codeCreateWithoutBookInput)
    create!: discount_codeCreateWithoutBookInput;
}

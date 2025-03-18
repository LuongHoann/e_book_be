import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { discount_codeWhereUniqueInput } from './discount-code-where-unique.input';
import { Type } from 'class-transformer';
import { discount_codeCreateWithoutAreaInput } from './discount-code-create-without-area.input';

@InputType()
export class discount_codeCreateOrConnectWithoutAreaInput {

    @Field(() => discount_codeWhereUniqueInput, {nullable:false})
    @Type(() => discount_codeWhereUniqueInput)
    where!: Prisma.AtLeast<discount_codeWhereUniqueInput, 'id'>;

    @Field(() => discount_codeCreateWithoutAreaInput, {nullable:false})
    @Type(() => discount_codeCreateWithoutAreaInput)
    create!: discount_codeCreateWithoutAreaInput;
}

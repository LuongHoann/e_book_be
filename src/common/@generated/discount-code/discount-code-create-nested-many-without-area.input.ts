import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { discount_codeCreateWithoutAreaInput } from './discount-code-create-without-area.input';
import { Type } from 'class-transformer';
import { discount_codeCreateOrConnectWithoutAreaInput } from './discount-code-create-or-connect-without-area.input';
import { discount_codeCreateManyAreaInputEnvelope } from './discount-code-create-many-area-input-envelope.input';
import { Prisma } from '@prisma/client';
import { discount_codeWhereUniqueInput } from './discount-code-where-unique.input';

@InputType()
export class discount_codeCreateNestedManyWithoutAreaInput {

    @Field(() => [discount_codeCreateWithoutAreaInput], {nullable:true})
    @Type(() => discount_codeCreateWithoutAreaInput)
    create?: Array<discount_codeCreateWithoutAreaInput>;

    @Field(() => [discount_codeCreateOrConnectWithoutAreaInput], {nullable:true})
    @Type(() => discount_codeCreateOrConnectWithoutAreaInput)
    connectOrCreate?: Array<discount_codeCreateOrConnectWithoutAreaInput>;

    @Field(() => discount_codeCreateManyAreaInputEnvelope, {nullable:true})
    @Type(() => discount_codeCreateManyAreaInputEnvelope)
    createMany?: discount_codeCreateManyAreaInputEnvelope;

    @Field(() => [discount_codeWhereUniqueInput], {nullable:true})
    @Type(() => discount_codeWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<discount_codeWhereUniqueInput, 'id'>>;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { discount_codeCreateWithoutAreaInput } from './discount-code-create-without-area.input';
import { Type } from 'class-transformer';
import { discount_codeCreateOrConnectWithoutAreaInput } from './discount-code-create-or-connect-without-area.input';
import { discount_codeUpsertWithWhereUniqueWithoutAreaInput } from './discount-code-upsert-with-where-unique-without-area.input';
import { discount_codeCreateManyAreaInputEnvelope } from './discount-code-create-many-area-input-envelope.input';
import { Prisma } from '@prisma/client';
import { discount_codeWhereUniqueInput } from './discount-code-where-unique.input';
import { discount_codeUpdateWithWhereUniqueWithoutAreaInput } from './discount-code-update-with-where-unique-without-area.input';
import { discount_codeUpdateManyWithWhereWithoutAreaInput } from './discount-code-update-many-with-where-without-area.input';
import { discount_codeScalarWhereInput } from './discount-code-scalar-where.input';

@InputType()
export class discount_codeUpdateManyWithoutAreaNestedInput {

    @Field(() => [discount_codeCreateWithoutAreaInput], {nullable:true})
    @Type(() => discount_codeCreateWithoutAreaInput)
    create?: Array<discount_codeCreateWithoutAreaInput>;

    @Field(() => [discount_codeCreateOrConnectWithoutAreaInput], {nullable:true})
    @Type(() => discount_codeCreateOrConnectWithoutAreaInput)
    connectOrCreate?: Array<discount_codeCreateOrConnectWithoutAreaInput>;

    @Field(() => [discount_codeUpsertWithWhereUniqueWithoutAreaInput], {nullable:true})
    @Type(() => discount_codeUpsertWithWhereUniqueWithoutAreaInput)
    upsert?: Array<discount_codeUpsertWithWhereUniqueWithoutAreaInput>;

    @Field(() => discount_codeCreateManyAreaInputEnvelope, {nullable:true})
    @Type(() => discount_codeCreateManyAreaInputEnvelope)
    createMany?: discount_codeCreateManyAreaInputEnvelope;

    @Field(() => [discount_codeWhereUniqueInput], {nullable:true})
    @Type(() => discount_codeWhereUniqueInput)
    set?: Array<Prisma.AtLeast<discount_codeWhereUniqueInput, 'id'>>;

    @Field(() => [discount_codeWhereUniqueInput], {nullable:true})
    @Type(() => discount_codeWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<discount_codeWhereUniqueInput, 'id'>>;

    @Field(() => [discount_codeWhereUniqueInput], {nullable:true})
    @Type(() => discount_codeWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<discount_codeWhereUniqueInput, 'id'>>;

    @Field(() => [discount_codeWhereUniqueInput], {nullable:true})
    @Type(() => discount_codeWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<discount_codeWhereUniqueInput, 'id'>>;

    @Field(() => [discount_codeUpdateWithWhereUniqueWithoutAreaInput], {nullable:true})
    @Type(() => discount_codeUpdateWithWhereUniqueWithoutAreaInput)
    update?: Array<discount_codeUpdateWithWhereUniqueWithoutAreaInput>;

    @Field(() => [discount_codeUpdateManyWithWhereWithoutAreaInput], {nullable:true})
    @Type(() => discount_codeUpdateManyWithWhereWithoutAreaInput)
    updateMany?: Array<discount_codeUpdateManyWithWhereWithoutAreaInput>;

    @Field(() => [discount_codeScalarWhereInput], {nullable:true})
    @Type(() => discount_codeScalarWhereInput)
    deleteMany?: Array<discount_codeScalarWhereInput>;
}

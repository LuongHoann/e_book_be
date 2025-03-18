import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { newsCreateWithoutUserInput } from './news-create-without-user.input';
import { Type } from 'class-transformer';
import { newsCreateOrConnectWithoutUserInput } from './news-create-or-connect-without-user.input';
import { newsUpsertWithWhereUniqueWithoutUserInput } from './news-upsert-with-where-unique-without-user.input';
import { newsCreateManyUserInputEnvelope } from './news-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { newsWhereUniqueInput } from './news-where-unique.input';
import { newsUpdateWithWhereUniqueWithoutUserInput } from './news-update-with-where-unique-without-user.input';
import { newsUpdateManyWithWhereWithoutUserInput } from './news-update-many-with-where-without-user.input';
import { newsScalarWhereInput } from './news-scalar-where.input';

@InputType()
export class newsUpdateManyWithoutUserNestedInput {

    @Field(() => [newsCreateWithoutUserInput], {nullable:true})
    @Type(() => newsCreateWithoutUserInput)
    create?: Array<newsCreateWithoutUserInput>;

    @Field(() => [newsCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => newsCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<newsCreateOrConnectWithoutUserInput>;

    @Field(() => [newsUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => newsUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<newsUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => newsCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => newsCreateManyUserInputEnvelope)
    createMany?: newsCreateManyUserInputEnvelope;

    @Field(() => [newsWhereUniqueInput], {nullable:true})
    @Type(() => newsWhereUniqueInput)
    set?: Array<Prisma.AtLeast<newsWhereUniqueInput, 'id'>>;

    @Field(() => [newsWhereUniqueInput], {nullable:true})
    @Type(() => newsWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<newsWhereUniqueInput, 'id'>>;

    @Field(() => [newsWhereUniqueInput], {nullable:true})
    @Type(() => newsWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<newsWhereUniqueInput, 'id'>>;

    @Field(() => [newsWhereUniqueInput], {nullable:true})
    @Type(() => newsWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<newsWhereUniqueInput, 'id'>>;

    @Field(() => [newsUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => newsUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<newsUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [newsUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => newsUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<newsUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [newsScalarWhereInput], {nullable:true})
    @Type(() => newsScalarWhereInput)
    deleteMany?: Array<newsScalarWhereInput>;
}

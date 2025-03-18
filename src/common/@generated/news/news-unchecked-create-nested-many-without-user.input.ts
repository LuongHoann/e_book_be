import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { newsCreateWithoutUserInput } from './news-create-without-user.input';
import { Type } from 'class-transformer';
import { newsCreateOrConnectWithoutUserInput } from './news-create-or-connect-without-user.input';
import { newsCreateManyUserInputEnvelope } from './news-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { newsWhereUniqueInput } from './news-where-unique.input';

@InputType()
export class newsUncheckedCreateNestedManyWithoutUserInput {

    @Field(() => [newsCreateWithoutUserInput], {nullable:true})
    @Type(() => newsCreateWithoutUserInput)
    create?: Array<newsCreateWithoutUserInput>;

    @Field(() => [newsCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => newsCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<newsCreateOrConnectWithoutUserInput>;

    @Field(() => newsCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => newsCreateManyUserInputEnvelope)
    createMany?: newsCreateManyUserInputEnvelope;

    @Field(() => [newsWhereUniqueInput], {nullable:true})
    @Type(() => newsWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<newsWhereUniqueInput, 'id'>>;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { reading_historyCreateWithoutUserInput } from './reading-history-create-without-user.input';
import { Type } from 'class-transformer';
import { reading_historyCreateOrConnectWithoutUserInput } from './reading-history-create-or-connect-without-user.input';
import { reading_historyUpsertWithWhereUniqueWithoutUserInput } from './reading-history-upsert-with-where-unique-without-user.input';
import { reading_historyCreateManyUserInputEnvelope } from './reading-history-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { reading_historyWhereUniqueInput } from './reading-history-where-unique.input';
import { reading_historyUpdateWithWhereUniqueWithoutUserInput } from './reading-history-update-with-where-unique-without-user.input';
import { reading_historyUpdateManyWithWhereWithoutUserInput } from './reading-history-update-many-with-where-without-user.input';
import { reading_historyScalarWhereInput } from './reading-history-scalar-where.input';

@InputType()
export class reading_historyUpdateManyWithoutUserNestedInput {

    @Field(() => [reading_historyCreateWithoutUserInput], {nullable:true})
    @Type(() => reading_historyCreateWithoutUserInput)
    create?: Array<reading_historyCreateWithoutUserInput>;

    @Field(() => [reading_historyCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => reading_historyCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<reading_historyCreateOrConnectWithoutUserInput>;

    @Field(() => [reading_historyUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => reading_historyUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<reading_historyUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => reading_historyCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => reading_historyCreateManyUserInputEnvelope)
    createMany?: reading_historyCreateManyUserInputEnvelope;

    @Field(() => [reading_historyWhereUniqueInput], {nullable:true})
    @Type(() => reading_historyWhereUniqueInput)
    set?: Array<Prisma.AtLeast<reading_historyWhereUniqueInput, 'user_id_book_id'>>;

    @Field(() => [reading_historyWhereUniqueInput], {nullable:true})
    @Type(() => reading_historyWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<reading_historyWhereUniqueInput, 'user_id_book_id'>>;

    @Field(() => [reading_historyWhereUniqueInput], {nullable:true})
    @Type(() => reading_historyWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<reading_historyWhereUniqueInput, 'user_id_book_id'>>;

    @Field(() => [reading_historyWhereUniqueInput], {nullable:true})
    @Type(() => reading_historyWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<reading_historyWhereUniqueInput, 'user_id_book_id'>>;

    @Field(() => [reading_historyUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => reading_historyUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<reading_historyUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [reading_historyUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => reading_historyUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<reading_historyUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [reading_historyScalarWhereInput], {nullable:true})
    @Type(() => reading_historyScalarWhereInput)
    deleteMany?: Array<reading_historyScalarWhereInput>;
}

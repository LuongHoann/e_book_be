import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { reading_historyCreateWithoutUserInput } from './reading-history-create-without-user.input';
import { Type } from 'class-transformer';
import { reading_historyCreateOrConnectWithoutUserInput } from './reading-history-create-or-connect-without-user.input';
import { reading_historyCreateManyUserInputEnvelope } from './reading-history-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { reading_historyWhereUniqueInput } from './reading-history-where-unique.input';

@InputType()
export class reading_historyCreateNestedManyWithoutUserInput {

    @Field(() => [reading_historyCreateWithoutUserInput], {nullable:true})
    @Type(() => reading_historyCreateWithoutUserInput)
    create?: Array<reading_historyCreateWithoutUserInput>;

    @Field(() => [reading_historyCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => reading_historyCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<reading_historyCreateOrConnectWithoutUserInput>;

    @Field(() => reading_historyCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => reading_historyCreateManyUserInputEnvelope)
    createMany?: reading_historyCreateManyUserInputEnvelope;

    @Field(() => [reading_historyWhereUniqueInput], {nullable:true})
    @Type(() => reading_historyWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<reading_historyWhereUniqueInput, 'user_id_book_id'>>;
}

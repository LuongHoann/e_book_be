import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { commentCreateWithoutUserInput } from './comment-create-without-user.input';
import { Type } from 'class-transformer';
import { commentCreateOrConnectWithoutUserInput } from './comment-create-or-connect-without-user.input';
import { commentUpsertWithWhereUniqueWithoutUserInput } from './comment-upsert-with-where-unique-without-user.input';
import { commentCreateManyUserInputEnvelope } from './comment-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { commentWhereUniqueInput } from './comment-where-unique.input';
import { commentUpdateWithWhereUniqueWithoutUserInput } from './comment-update-with-where-unique-without-user.input';
import { commentUpdateManyWithWhereWithoutUserInput } from './comment-update-many-with-where-without-user.input';
import { commentScalarWhereInput } from './comment-scalar-where.input';

@InputType()
export class commentUpdateManyWithoutUserNestedInput {

    @Field(() => [commentCreateWithoutUserInput], {nullable:true})
    @Type(() => commentCreateWithoutUserInput)
    create?: Array<commentCreateWithoutUserInput>;

    @Field(() => [commentCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => commentCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<commentCreateOrConnectWithoutUserInput>;

    @Field(() => [commentUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => commentUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<commentUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => commentCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => commentCreateManyUserInputEnvelope)
    createMany?: commentCreateManyUserInputEnvelope;

    @Field(() => [commentWhereUniqueInput], {nullable:true})
    @Type(() => commentWhereUniqueInput)
    set?: Array<Prisma.AtLeast<commentWhereUniqueInput, 'book_id_user_id'>>;

    @Field(() => [commentWhereUniqueInput], {nullable:true})
    @Type(() => commentWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<commentWhereUniqueInput, 'book_id_user_id'>>;

    @Field(() => [commentWhereUniqueInput], {nullable:true})
    @Type(() => commentWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<commentWhereUniqueInput, 'book_id_user_id'>>;

    @Field(() => [commentWhereUniqueInput], {nullable:true})
    @Type(() => commentWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<commentWhereUniqueInput, 'book_id_user_id'>>;

    @Field(() => [commentUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => commentUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<commentUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [commentUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => commentUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<commentUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [commentScalarWhereInput], {nullable:true})
    @Type(() => commentScalarWhereInput)
    deleteMany?: Array<commentScalarWhereInput>;
}

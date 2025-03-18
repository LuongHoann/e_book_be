import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { commentCreateWithoutUserInput } from './comment-create-without-user.input';
import { Type } from 'class-transformer';
import { commentCreateOrConnectWithoutUserInput } from './comment-create-or-connect-without-user.input';
import { commentCreateManyUserInputEnvelope } from './comment-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { commentWhereUniqueInput } from './comment-where-unique.input';

@InputType()
export class commentCreateNestedManyWithoutUserInput {

    @Field(() => [commentCreateWithoutUserInput], {nullable:true})
    @Type(() => commentCreateWithoutUserInput)
    create?: Array<commentCreateWithoutUserInput>;

    @Field(() => [commentCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => commentCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<commentCreateOrConnectWithoutUserInput>;

    @Field(() => commentCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => commentCreateManyUserInputEnvelope)
    createMany?: commentCreateManyUserInputEnvelope;

    @Field(() => [commentWhereUniqueInput], {nullable:true})
    @Type(() => commentWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<commentWhereUniqueInput, 'book_id_user_id'>>;
}

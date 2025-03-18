import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { favouriteCreateWithoutUserInput } from './favourite-create-without-user.input';
import { Type } from 'class-transformer';
import { favouriteCreateOrConnectWithoutUserInput } from './favourite-create-or-connect-without-user.input';
import { favouriteCreateManyUserInputEnvelope } from './favourite-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { favouriteWhereUniqueInput } from './favourite-where-unique.input';

@InputType()
export class favouriteUncheckedCreateNestedManyWithoutUserInput {

    @Field(() => [favouriteCreateWithoutUserInput], {nullable:true})
    @Type(() => favouriteCreateWithoutUserInput)
    create?: Array<favouriteCreateWithoutUserInput>;

    @Field(() => [favouriteCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => favouriteCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<favouriteCreateOrConnectWithoutUserInput>;

    @Field(() => favouriteCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => favouriteCreateManyUserInputEnvelope)
    createMany?: favouriteCreateManyUserInputEnvelope;

    @Field(() => [favouriteWhereUniqueInput], {nullable:true})
    @Type(() => favouriteWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<favouriteWhereUniqueInput, 'book_id_user_id'>>;
}

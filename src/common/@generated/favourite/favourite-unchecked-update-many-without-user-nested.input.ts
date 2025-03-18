import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { favouriteCreateWithoutUserInput } from './favourite-create-without-user.input';
import { Type } from 'class-transformer';
import { favouriteCreateOrConnectWithoutUserInput } from './favourite-create-or-connect-without-user.input';
import { favouriteUpsertWithWhereUniqueWithoutUserInput } from './favourite-upsert-with-where-unique-without-user.input';
import { favouriteCreateManyUserInputEnvelope } from './favourite-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { favouriteWhereUniqueInput } from './favourite-where-unique.input';
import { favouriteUpdateWithWhereUniqueWithoutUserInput } from './favourite-update-with-where-unique-without-user.input';
import { favouriteUpdateManyWithWhereWithoutUserInput } from './favourite-update-many-with-where-without-user.input';
import { favouriteScalarWhereInput } from './favourite-scalar-where.input';

@InputType()
export class favouriteUncheckedUpdateManyWithoutUserNestedInput {

    @Field(() => [favouriteCreateWithoutUserInput], {nullable:true})
    @Type(() => favouriteCreateWithoutUserInput)
    create?: Array<favouriteCreateWithoutUserInput>;

    @Field(() => [favouriteCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => favouriteCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<favouriteCreateOrConnectWithoutUserInput>;

    @Field(() => [favouriteUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => favouriteUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<favouriteUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => favouriteCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => favouriteCreateManyUserInputEnvelope)
    createMany?: favouriteCreateManyUserInputEnvelope;

    @Field(() => [favouriteWhereUniqueInput], {nullable:true})
    @Type(() => favouriteWhereUniqueInput)
    set?: Array<Prisma.AtLeast<favouriteWhereUniqueInput, 'book_id_user_id'>>;

    @Field(() => [favouriteWhereUniqueInput], {nullable:true})
    @Type(() => favouriteWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<favouriteWhereUniqueInput, 'book_id_user_id'>>;

    @Field(() => [favouriteWhereUniqueInput], {nullable:true})
    @Type(() => favouriteWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<favouriteWhereUniqueInput, 'book_id_user_id'>>;

    @Field(() => [favouriteWhereUniqueInput], {nullable:true})
    @Type(() => favouriteWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<favouriteWhereUniqueInput, 'book_id_user_id'>>;

    @Field(() => [favouriteUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => favouriteUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<favouriteUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [favouriteUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => favouriteUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<favouriteUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [favouriteScalarWhereInput], {nullable:true})
    @Type(() => favouriteScalarWhereInput)
    deleteMany?: Array<favouriteScalarWhereInput>;
}

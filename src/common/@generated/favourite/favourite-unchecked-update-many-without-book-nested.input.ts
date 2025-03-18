import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { favouriteCreateWithoutBookInput } from './favourite-create-without-book.input';
import { Type } from 'class-transformer';
import { favouriteCreateOrConnectWithoutBookInput } from './favourite-create-or-connect-without-book.input';
import { favouriteUpsertWithWhereUniqueWithoutBookInput } from './favourite-upsert-with-where-unique-without-book.input';
import { favouriteCreateManyBookInputEnvelope } from './favourite-create-many-book-input-envelope.input';
import { Prisma } from '@prisma/client';
import { favouriteWhereUniqueInput } from './favourite-where-unique.input';
import { favouriteUpdateWithWhereUniqueWithoutBookInput } from './favourite-update-with-where-unique-without-book.input';
import { favouriteUpdateManyWithWhereWithoutBookInput } from './favourite-update-many-with-where-without-book.input';
import { favouriteScalarWhereInput } from './favourite-scalar-where.input';

@InputType()
export class favouriteUncheckedUpdateManyWithoutBookNestedInput {

    @Field(() => [favouriteCreateWithoutBookInput], {nullable:true})
    @Type(() => favouriteCreateWithoutBookInput)
    create?: Array<favouriteCreateWithoutBookInput>;

    @Field(() => [favouriteCreateOrConnectWithoutBookInput], {nullable:true})
    @Type(() => favouriteCreateOrConnectWithoutBookInput)
    connectOrCreate?: Array<favouriteCreateOrConnectWithoutBookInput>;

    @Field(() => [favouriteUpsertWithWhereUniqueWithoutBookInput], {nullable:true})
    @Type(() => favouriteUpsertWithWhereUniqueWithoutBookInput)
    upsert?: Array<favouriteUpsertWithWhereUniqueWithoutBookInput>;

    @Field(() => favouriteCreateManyBookInputEnvelope, {nullable:true})
    @Type(() => favouriteCreateManyBookInputEnvelope)
    createMany?: favouriteCreateManyBookInputEnvelope;

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

    @Field(() => [favouriteUpdateWithWhereUniqueWithoutBookInput], {nullable:true})
    @Type(() => favouriteUpdateWithWhereUniqueWithoutBookInput)
    update?: Array<favouriteUpdateWithWhereUniqueWithoutBookInput>;

    @Field(() => [favouriteUpdateManyWithWhereWithoutBookInput], {nullable:true})
    @Type(() => favouriteUpdateManyWithWhereWithoutBookInput)
    updateMany?: Array<favouriteUpdateManyWithWhereWithoutBookInput>;

    @Field(() => [favouriteScalarWhereInput], {nullable:true})
    @Type(() => favouriteScalarWhereInput)
    deleteMany?: Array<favouriteScalarWhereInput>;
}

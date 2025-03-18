import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { favouriteCreateWithoutBookInput } from './favourite-create-without-book.input';
import { Type } from 'class-transformer';
import { favouriteCreateOrConnectWithoutBookInput } from './favourite-create-or-connect-without-book.input';
import { favouriteCreateManyBookInputEnvelope } from './favourite-create-many-book-input-envelope.input';
import { Prisma } from '@prisma/client';
import { favouriteWhereUniqueInput } from './favourite-where-unique.input';

@InputType()
export class favouriteCreateNestedManyWithoutBookInput {

    @Field(() => [favouriteCreateWithoutBookInput], {nullable:true})
    @Type(() => favouriteCreateWithoutBookInput)
    create?: Array<favouriteCreateWithoutBookInput>;

    @Field(() => [favouriteCreateOrConnectWithoutBookInput], {nullable:true})
    @Type(() => favouriteCreateOrConnectWithoutBookInput)
    connectOrCreate?: Array<favouriteCreateOrConnectWithoutBookInput>;

    @Field(() => favouriteCreateManyBookInputEnvelope, {nullable:true})
    @Type(() => favouriteCreateManyBookInputEnvelope)
    createMany?: favouriteCreateManyBookInputEnvelope;

    @Field(() => [favouriteWhereUniqueInput], {nullable:true})
    @Type(() => favouriteWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<favouriteWhereUniqueInput, 'book_id_user_id'>>;
}

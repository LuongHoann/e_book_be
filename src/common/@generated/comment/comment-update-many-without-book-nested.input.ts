import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { commentCreateWithoutBookInput } from './comment-create-without-book.input';
import { Type } from 'class-transformer';
import { commentCreateOrConnectWithoutBookInput } from './comment-create-or-connect-without-book.input';
import { commentUpsertWithWhereUniqueWithoutBookInput } from './comment-upsert-with-where-unique-without-book.input';
import { commentCreateManyBookInputEnvelope } from './comment-create-many-book-input-envelope.input';
import { Prisma } from '@prisma/client';
import { commentWhereUniqueInput } from './comment-where-unique.input';
import { commentUpdateWithWhereUniqueWithoutBookInput } from './comment-update-with-where-unique-without-book.input';
import { commentUpdateManyWithWhereWithoutBookInput } from './comment-update-many-with-where-without-book.input';
import { commentScalarWhereInput } from './comment-scalar-where.input';

@InputType()
export class commentUpdateManyWithoutBookNestedInput {

    @Field(() => [commentCreateWithoutBookInput], {nullable:true})
    @Type(() => commentCreateWithoutBookInput)
    create?: Array<commentCreateWithoutBookInput>;

    @Field(() => [commentCreateOrConnectWithoutBookInput], {nullable:true})
    @Type(() => commentCreateOrConnectWithoutBookInput)
    connectOrCreate?: Array<commentCreateOrConnectWithoutBookInput>;

    @Field(() => [commentUpsertWithWhereUniqueWithoutBookInput], {nullable:true})
    @Type(() => commentUpsertWithWhereUniqueWithoutBookInput)
    upsert?: Array<commentUpsertWithWhereUniqueWithoutBookInput>;

    @Field(() => commentCreateManyBookInputEnvelope, {nullable:true})
    @Type(() => commentCreateManyBookInputEnvelope)
    createMany?: commentCreateManyBookInputEnvelope;

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

    @Field(() => [commentUpdateWithWhereUniqueWithoutBookInput], {nullable:true})
    @Type(() => commentUpdateWithWhereUniqueWithoutBookInput)
    update?: Array<commentUpdateWithWhereUniqueWithoutBookInput>;

    @Field(() => [commentUpdateManyWithWhereWithoutBookInput], {nullable:true})
    @Type(() => commentUpdateManyWithWhereWithoutBookInput)
    updateMany?: Array<commentUpdateManyWithWhereWithoutBookInput>;

    @Field(() => [commentScalarWhereInput], {nullable:true})
    @Type(() => commentScalarWhereInput)
    deleteMany?: Array<commentScalarWhereInput>;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { commentCreateWithoutBookInput } from './comment-create-without-book.input';
import { Type } from 'class-transformer';
import { commentCreateOrConnectWithoutBookInput } from './comment-create-or-connect-without-book.input';
import { commentCreateManyBookInputEnvelope } from './comment-create-many-book-input-envelope.input';
import { Prisma } from '@prisma/client';
import { commentWhereUniqueInput } from './comment-where-unique.input';

@InputType()
export class commentUncheckedCreateNestedManyWithoutBookInput {

    @Field(() => [commentCreateWithoutBookInput], {nullable:true})
    @Type(() => commentCreateWithoutBookInput)
    create?: Array<commentCreateWithoutBookInput>;

    @Field(() => [commentCreateOrConnectWithoutBookInput], {nullable:true})
    @Type(() => commentCreateOrConnectWithoutBookInput)
    connectOrCreate?: Array<commentCreateOrConnectWithoutBookInput>;

    @Field(() => commentCreateManyBookInputEnvelope, {nullable:true})
    @Type(() => commentCreateManyBookInputEnvelope)
    createMany?: commentCreateManyBookInputEnvelope;

    @Field(() => [commentWhereUniqueInput], {nullable:true})
    @Type(() => commentWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<commentWhereUniqueInput, 'book_id_user_id'>>;
}

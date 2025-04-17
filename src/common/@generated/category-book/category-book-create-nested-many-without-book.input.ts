import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { category_bookCreateWithoutBookInput } from './category-book-create-without-book.input';
import { Type } from 'class-transformer';
import { category_bookCreateOrConnectWithoutBookInput } from './category-book-create-or-connect-without-book.input';
import { category_bookCreateManyBookInputEnvelope } from './category-book-create-many-book-input-envelope.input';
import { Prisma } from '@prisma/client';
import { category_bookWhereUniqueInput } from './category-book-where-unique.input';

@InputType()
export class category_bookCreateNestedManyWithoutBookInput {

    @Field(() => [category_bookCreateWithoutBookInput], {nullable:true})
    @Type(() => category_bookCreateWithoutBookInput)
    create?: Array<category_bookCreateWithoutBookInput>;

    @Field(() => [category_bookCreateOrConnectWithoutBookInput], {nullable:true})
    @Type(() => category_bookCreateOrConnectWithoutBookInput)
    connectOrCreate?: Array<category_bookCreateOrConnectWithoutBookInput>;

    @Field(() => category_bookCreateManyBookInputEnvelope, {nullable:true})
    @Type(() => category_bookCreateManyBookInputEnvelope)
    createMany?: category_bookCreateManyBookInputEnvelope;

    @Field(() => [category_bookWhereUniqueInput], {nullable:true})
    @Type(() => category_bookWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<category_bookWhereUniqueInput, 'category_id_book_id'>>;
}

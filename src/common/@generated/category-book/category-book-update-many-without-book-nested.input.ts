import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { category_bookCreateWithoutBookInput } from './category-book-create-without-book.input';
import { Type } from 'class-transformer';
import { category_bookCreateOrConnectWithoutBookInput } from './category-book-create-or-connect-without-book.input';
import { category_bookUpsertWithWhereUniqueWithoutBookInput } from './category-book-upsert-with-where-unique-without-book.input';
import { category_bookCreateManyBookInputEnvelope } from './category-book-create-many-book-input-envelope.input';
import { Prisma } from '@prisma/client';
import { category_bookWhereUniqueInput } from './category-book-where-unique.input';
import { category_bookUpdateWithWhereUniqueWithoutBookInput } from './category-book-update-with-where-unique-without-book.input';
import { category_bookUpdateManyWithWhereWithoutBookInput } from './category-book-update-many-with-where-without-book.input';
import { category_bookScalarWhereInput } from './category-book-scalar-where.input';

@InputType()
export class category_bookUpdateManyWithoutBookNestedInput {

    @Field(() => [category_bookCreateWithoutBookInput], {nullable:true})
    @Type(() => category_bookCreateWithoutBookInput)
    create?: Array<category_bookCreateWithoutBookInput>;

    @Field(() => [category_bookCreateOrConnectWithoutBookInput], {nullable:true})
    @Type(() => category_bookCreateOrConnectWithoutBookInput)
    connectOrCreate?: Array<category_bookCreateOrConnectWithoutBookInput>;

    @Field(() => [category_bookUpsertWithWhereUniqueWithoutBookInput], {nullable:true})
    @Type(() => category_bookUpsertWithWhereUniqueWithoutBookInput)
    upsert?: Array<category_bookUpsertWithWhereUniqueWithoutBookInput>;

    @Field(() => category_bookCreateManyBookInputEnvelope, {nullable:true})
    @Type(() => category_bookCreateManyBookInputEnvelope)
    createMany?: category_bookCreateManyBookInputEnvelope;

    @Field(() => [category_bookWhereUniqueInput], {nullable:true})
    @Type(() => category_bookWhereUniqueInput)
    set?: Array<Prisma.AtLeast<category_bookWhereUniqueInput, 'category_book_id'>>;

    @Field(() => [category_bookWhereUniqueInput], {nullable:true})
    @Type(() => category_bookWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<category_bookWhereUniqueInput, 'category_book_id'>>;

    @Field(() => [category_bookWhereUniqueInput], {nullable:true})
    @Type(() => category_bookWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<category_bookWhereUniqueInput, 'category_book_id'>>;

    @Field(() => [category_bookWhereUniqueInput], {nullable:true})
    @Type(() => category_bookWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<category_bookWhereUniqueInput, 'category_book_id'>>;

    @Field(() => [category_bookUpdateWithWhereUniqueWithoutBookInput], {nullable:true})
    @Type(() => category_bookUpdateWithWhereUniqueWithoutBookInput)
    update?: Array<category_bookUpdateWithWhereUniqueWithoutBookInput>;

    @Field(() => [category_bookUpdateManyWithWhereWithoutBookInput], {nullable:true})
    @Type(() => category_bookUpdateManyWithWhereWithoutBookInput)
    updateMany?: Array<category_bookUpdateManyWithWhereWithoutBookInput>;

    @Field(() => [category_bookScalarWhereInput], {nullable:true})
    @Type(() => category_bookScalarWhereInput)
    deleteMany?: Array<category_bookScalarWhereInput>;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { reading_historyCreateWithoutBookInput } from './reading-history-create-without-book.input';
import { Type } from 'class-transformer';
import { reading_historyCreateOrConnectWithoutBookInput } from './reading-history-create-or-connect-without-book.input';
import { reading_historyUpsertWithWhereUniqueWithoutBookInput } from './reading-history-upsert-with-where-unique-without-book.input';
import { reading_historyCreateManyBookInputEnvelope } from './reading-history-create-many-book-input-envelope.input';
import { Prisma } from '@prisma/client';
import { reading_historyWhereUniqueInput } from './reading-history-where-unique.input';
import { reading_historyUpdateWithWhereUniqueWithoutBookInput } from './reading-history-update-with-where-unique-without-book.input';
import { reading_historyUpdateManyWithWhereWithoutBookInput } from './reading-history-update-many-with-where-without-book.input';
import { reading_historyScalarWhereInput } from './reading-history-scalar-where.input';

@InputType()
export class reading_historyUncheckedUpdateManyWithoutBookNestedInput {

    @Field(() => [reading_historyCreateWithoutBookInput], {nullable:true})
    @Type(() => reading_historyCreateWithoutBookInput)
    create?: Array<reading_historyCreateWithoutBookInput>;

    @Field(() => [reading_historyCreateOrConnectWithoutBookInput], {nullable:true})
    @Type(() => reading_historyCreateOrConnectWithoutBookInput)
    connectOrCreate?: Array<reading_historyCreateOrConnectWithoutBookInput>;

    @Field(() => [reading_historyUpsertWithWhereUniqueWithoutBookInput], {nullable:true})
    @Type(() => reading_historyUpsertWithWhereUniqueWithoutBookInput)
    upsert?: Array<reading_historyUpsertWithWhereUniqueWithoutBookInput>;

    @Field(() => reading_historyCreateManyBookInputEnvelope, {nullable:true})
    @Type(() => reading_historyCreateManyBookInputEnvelope)
    createMany?: reading_historyCreateManyBookInputEnvelope;

    @Field(() => [reading_historyWhereUniqueInput], {nullable:true})
    @Type(() => reading_historyWhereUniqueInput)
    set?: Array<Prisma.AtLeast<reading_historyWhereUniqueInput, 'user_id_book_id'>>;

    @Field(() => [reading_historyWhereUniqueInput], {nullable:true})
    @Type(() => reading_historyWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<reading_historyWhereUniqueInput, 'user_id_book_id'>>;

    @Field(() => [reading_historyWhereUniqueInput], {nullable:true})
    @Type(() => reading_historyWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<reading_historyWhereUniqueInput, 'user_id_book_id'>>;

    @Field(() => [reading_historyWhereUniqueInput], {nullable:true})
    @Type(() => reading_historyWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<reading_historyWhereUniqueInput, 'user_id_book_id'>>;

    @Field(() => [reading_historyUpdateWithWhereUniqueWithoutBookInput], {nullable:true})
    @Type(() => reading_historyUpdateWithWhereUniqueWithoutBookInput)
    update?: Array<reading_historyUpdateWithWhereUniqueWithoutBookInput>;

    @Field(() => [reading_historyUpdateManyWithWhereWithoutBookInput], {nullable:true})
    @Type(() => reading_historyUpdateManyWithWhereWithoutBookInput)
    updateMany?: Array<reading_historyUpdateManyWithWhereWithoutBookInput>;

    @Field(() => [reading_historyScalarWhereInput], {nullable:true})
    @Type(() => reading_historyScalarWhereInput)
    deleteMany?: Array<reading_historyScalarWhereInput>;
}

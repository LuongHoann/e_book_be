import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { reading_historyCreateWithoutBookInput } from './reading-history-create-without-book.input';
import { Type } from 'class-transformer';
import { reading_historyCreateOrConnectWithoutBookInput } from './reading-history-create-or-connect-without-book.input';
import { reading_historyCreateManyBookInputEnvelope } from './reading-history-create-many-book-input-envelope.input';
import { Prisma } from '@prisma/client';
import { reading_historyWhereUniqueInput } from './reading-history-where-unique.input';

@InputType()
export class reading_historyUncheckedCreateNestedManyWithoutBookInput {

    @Field(() => [reading_historyCreateWithoutBookInput], {nullable:true})
    @Type(() => reading_historyCreateWithoutBookInput)
    create?: Array<reading_historyCreateWithoutBookInput>;

    @Field(() => [reading_historyCreateOrConnectWithoutBookInput], {nullable:true})
    @Type(() => reading_historyCreateOrConnectWithoutBookInput)
    connectOrCreate?: Array<reading_historyCreateOrConnectWithoutBookInput>;

    @Field(() => reading_historyCreateManyBookInputEnvelope, {nullable:true})
    @Type(() => reading_historyCreateManyBookInputEnvelope)
    createMany?: reading_historyCreateManyBookInputEnvelope;

    @Field(() => [reading_historyWhereUniqueInput], {nullable:true})
    @Type(() => reading_historyWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<reading_historyWhereUniqueInput, 'user_id_book_id'>>;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { reading_historyWhereUniqueInput } from './reading-history-where-unique.input';
import { Type } from 'class-transformer';
import { reading_historyUpdateWithoutBookInput } from './reading-history-update-without-book.input';
import { reading_historyCreateWithoutBookInput } from './reading-history-create-without-book.input';

@InputType()
export class reading_historyUpsertWithWhereUniqueWithoutBookInput {

    @Field(() => reading_historyWhereUniqueInput, {nullable:false})
    @Type(() => reading_historyWhereUniqueInput)
    where!: Prisma.AtLeast<reading_historyWhereUniqueInput, 'user_id_book_id'>;

    @Field(() => reading_historyUpdateWithoutBookInput, {nullable:false})
    @Type(() => reading_historyUpdateWithoutBookInput)
    update!: reading_historyUpdateWithoutBookInput;

    @Field(() => reading_historyCreateWithoutBookInput, {nullable:false})
    @Type(() => reading_historyCreateWithoutBookInput)
    create!: reading_historyCreateWithoutBookInput;
}

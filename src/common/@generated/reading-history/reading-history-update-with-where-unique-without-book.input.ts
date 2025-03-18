import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { reading_historyWhereUniqueInput } from './reading-history-where-unique.input';
import { Type } from 'class-transformer';
import { reading_historyUpdateWithoutBookInput } from './reading-history-update-without-book.input';

@InputType()
export class reading_historyUpdateWithWhereUniqueWithoutBookInput {

    @Field(() => reading_historyWhereUniqueInput, {nullable:false})
    @Type(() => reading_historyWhereUniqueInput)
    where!: Prisma.AtLeast<reading_historyWhereUniqueInput, 'user_id_book_id'>;

    @Field(() => reading_historyUpdateWithoutBookInput, {nullable:false})
    @Type(() => reading_historyUpdateWithoutBookInput)
    data!: reading_historyUpdateWithoutBookInput;
}

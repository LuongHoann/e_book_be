import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { reading_historyWhereInput } from '../reading-history/reading-history-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyreadingHistoryArgs {

    @Field(() => reading_historyWhereInput, {nullable:true})
    @Type(() => reading_historyWhereInput)
    where?: reading_historyWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}

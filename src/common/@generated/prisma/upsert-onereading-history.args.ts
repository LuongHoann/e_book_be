import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { reading_historyWhereUniqueInput } from '../reading-history/reading-history-where-unique.input';
import { Type } from 'class-transformer';
import { reading_historyCreateInput } from '../reading-history/reading-history-create.input';
import { reading_historyUpdateInput } from '../reading-history/reading-history-update.input';

@ArgsType()
export class UpsertOnereadingHistoryArgs {

    @Field(() => reading_historyWhereUniqueInput, {nullable:false})
    @Type(() => reading_historyWhereUniqueInput)
    where!: reading_historyWhereUniqueInput;

    @Field(() => reading_historyCreateInput, {nullable:false})
    @Type(() => reading_historyCreateInput)
    create!: reading_historyCreateInput;

    @Field(() => reading_historyUpdateInput, {nullable:false})
    @Type(() => reading_historyUpdateInput)
    update!: reading_historyUpdateInput;
}

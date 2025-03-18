import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { reading_historyUpdateInput } from '../reading-history/reading-history-update.input';
import { Type } from 'class-transformer';
import { reading_historyWhereUniqueInput } from '../reading-history/reading-history-where-unique.input';

@ArgsType()
export class UpdateOnereadingHistoryArgs {

    @Field(() => reading_historyUpdateInput, {nullable:false})
    @Type(() => reading_historyUpdateInput)
    data!: reading_historyUpdateInput;

    @Field(() => reading_historyWhereUniqueInput, {nullable:false})
    @Type(() => reading_historyWhereUniqueInput)
    where!: reading_historyWhereUniqueInput;
}

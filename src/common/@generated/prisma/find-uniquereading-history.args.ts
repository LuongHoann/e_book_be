import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { reading_historyWhereUniqueInput } from '../reading-history/reading-history-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniquereadingHistoryArgs {

    @Field(() => reading_historyWhereUniqueInput, {nullable:false})
    @Type(() => reading_historyWhereUniqueInput)
    where!: reading_historyWhereUniqueInput;
}

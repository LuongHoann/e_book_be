import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { reading_historyCreateInput } from '../reading-history/reading-history-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnereadingHistoryArgs {

    @Field(() => reading_historyCreateInput, {nullable:false})
    @Type(() => reading_historyCreateInput)
    data!: reading_historyCreateInput;
}

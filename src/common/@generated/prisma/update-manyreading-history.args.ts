import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { reading_historyUpdateManyMutationInput } from '../reading-history/reading-history-update-many-mutation.input';
import { Type } from 'class-transformer';
import { reading_historyWhereInput } from '../reading-history/reading-history-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyreadingHistoryArgs {

    @Field(() => reading_historyUpdateManyMutationInput, {nullable:false})
    @Type(() => reading_historyUpdateManyMutationInput)
    data!: reading_historyUpdateManyMutationInput;

    @Field(() => reading_historyWhereInput, {nullable:true})
    @Type(() => reading_historyWhereInput)
    where?: reading_historyWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}

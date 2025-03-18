import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { reading_historyCreateManyInput } from '../reading-history/reading-history-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyreadingHistoryArgs {

    @Field(() => [reading_historyCreateManyInput], {nullable:false})
    @Type(() => reading_historyCreateManyInput)
    data!: Array<reading_historyCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

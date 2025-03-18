import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { reading_historyWhereInput } from '../reading-history/reading-history-where.input';

@InputType()
export class Reading_historyListRelationFilter {

    @Field(() => reading_historyWhereInput, {nullable:true})
    every?: reading_historyWhereInput;

    @Field(() => reading_historyWhereInput, {nullable:true})
    some?: reading_historyWhereInput;

    @Field(() => reading_historyWhereInput, {nullable:true})
    none?: reading_historyWhereInput;
}

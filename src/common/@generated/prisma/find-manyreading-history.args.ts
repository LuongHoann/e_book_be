import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { reading_historyWhereInput } from '../reading-history/reading-history-where.input';
import { Type } from 'class-transformer';
import { reading_historyOrderByWithRelationInput } from '../reading-history/reading-history-order-by-with-relation.input';
import { reading_historyWhereUniqueInput } from '../reading-history/reading-history-where-unique.input';
import { Int } from '@nestjs/graphql';
import { Reading_historyScalarFieldEnum } from './reading-history-scalar-field.enum';

@ArgsType()
export class FindManyreadingHistoryArgs {

    @Field(() => reading_historyWhereInput, {nullable:true})
    @Type(() => reading_historyWhereInput)
    where?: reading_historyWhereInput;

    @Field(() => [reading_historyOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<reading_historyOrderByWithRelationInput>;

    @Field(() => reading_historyWhereUniqueInput, {nullable:true})
    cursor?: reading_historyWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [Reading_historyScalarFieldEnum], {nullable:true})
    distinct?: Array<`${Reading_historyScalarFieldEnum}`>;
}

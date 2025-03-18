import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { languageWhereInput } from './language-where.input';
import { Type } from 'class-transformer';
import { languageOrderByWithAggregationInput } from './language-order-by-with-aggregation.input';
import { LanguageScalarFieldEnum } from '../prisma/language-scalar-field.enum';
import { languageScalarWhereWithAggregatesInput } from './language-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class languageGroupByArgs {

    @Field(() => languageWhereInput, {nullable:true})
    @Type(() => languageWhereInput)
    where?: languageWhereInput;

    @Field(() => [languageOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<languageOrderByWithAggregationInput>;

    @Field(() => [LanguageScalarFieldEnum], {nullable:false})
    by!: Array<`${LanguageScalarFieldEnum}`>;

    @Field(() => languageScalarWhereWithAggregatesInput, {nullable:true})
    having?: languageScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}

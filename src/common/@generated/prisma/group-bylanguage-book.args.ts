import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { language_bookWhereInput } from '../language-book/language-book-where.input';
import { Type } from 'class-transformer';
import { language_bookOrderByWithAggregationInput } from '../language-book/language-book-order-by-with-aggregation.input';
import { Language_bookScalarFieldEnum } from './language-book-scalar-field.enum';
import { language_bookScalarWhereWithAggregatesInput } from '../language-book/language-book-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupBylanguageBookArgs {

    @Field(() => language_bookWhereInput, {nullable:true})
    @Type(() => language_bookWhereInput)
    where?: language_bookWhereInput;

    @Field(() => [language_bookOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<language_bookOrderByWithAggregationInput>;

    @Field(() => [Language_bookScalarFieldEnum], {nullable:false})
    by!: Array<`${Language_bookScalarFieldEnum}`>;

    @Field(() => language_bookScalarWhereWithAggregatesInput, {nullable:true})
    having?: language_bookScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}

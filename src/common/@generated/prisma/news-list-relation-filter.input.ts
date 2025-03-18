import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { newsWhereInput } from '../news/news-where.input';

@InputType()
export class NewsListRelationFilter {

    @Field(() => newsWhereInput, {nullable:true})
    every?: newsWhereInput;

    @Field(() => newsWhereInput, {nullable:true})
    some?: newsWhereInput;

    @Field(() => newsWhereInput, {nullable:true})
    none?: newsWhereInput;
}

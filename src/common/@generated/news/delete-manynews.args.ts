import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { newsWhereInput } from './news-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManynewsArgs {

    @Field(() => newsWhereInput, {nullable:true})
    @Type(() => newsWhereInput)
    where?: newsWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}

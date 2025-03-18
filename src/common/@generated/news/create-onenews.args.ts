import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { newsCreateInput } from './news-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnenewsArgs {

    @Field(() => newsCreateInput, {nullable:false})
    @Type(() => newsCreateInput)
    data!: newsCreateInput;
}

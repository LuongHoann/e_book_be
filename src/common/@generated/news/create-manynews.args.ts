import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { newsCreateManyInput } from './news-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManynewsArgs {

    @Field(() => [newsCreateManyInput], {nullable:false})
    @Type(() => newsCreateManyInput)
    data!: Array<newsCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

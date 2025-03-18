import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { newsCreateManyUserInput } from './news-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class newsCreateManyUserInputEnvelope {

    @Field(() => [newsCreateManyUserInput], {nullable:false})
    @Type(() => newsCreateManyUserInput)
    data!: Array<newsCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

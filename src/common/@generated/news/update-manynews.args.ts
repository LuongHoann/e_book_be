import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { newsUpdateManyMutationInput } from './news-update-many-mutation.input';
import { Type } from 'class-transformer';
import { newsWhereInput } from './news-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManynewsArgs {

    @Field(() => newsUpdateManyMutationInput, {nullable:false})
    @Type(() => newsUpdateManyMutationInput)
    data!: newsUpdateManyMutationInput;

    @Field(() => newsWhereInput, {nullable:true})
    @Type(() => newsWhereInput)
    where?: newsWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}

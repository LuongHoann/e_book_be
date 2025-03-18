import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { reviewWhereInput } from './review-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyreviewArgs {

    @Field(() => reviewWhereInput, {nullable:true})
    @Type(() => reviewWhereInput)
    where?: reviewWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}

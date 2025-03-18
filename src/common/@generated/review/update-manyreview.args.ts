import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { reviewUpdateManyMutationInput } from './review-update-many-mutation.input';
import { Type } from 'class-transformer';
import { reviewWhereInput } from './review-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyreviewArgs {

    @Field(() => reviewUpdateManyMutationInput, {nullable:false})
    @Type(() => reviewUpdateManyMutationInput)
    data!: reviewUpdateManyMutationInput;

    @Field(() => reviewWhereInput, {nullable:true})
    @Type(() => reviewWhereInput)
    where?: reviewWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}

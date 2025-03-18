import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { commentUpdateManyMutationInput } from './comment-update-many-mutation.input';
import { Type } from 'class-transformer';
import { commentWhereInput } from './comment-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManycommentArgs {

    @Field(() => commentUpdateManyMutationInput, {nullable:false})
    @Type(() => commentUpdateManyMutationInput)
    data!: commentUpdateManyMutationInput;

    @Field(() => commentWhereInput, {nullable:true})
    @Type(() => commentWhereInput)
    where?: commentWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}

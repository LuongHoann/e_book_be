import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { commentWhereInput } from './comment-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManycommentArgs {

    @Field(() => commentWhereInput, {nullable:true})
    @Type(() => commentWhereInput)
    where?: commentWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}

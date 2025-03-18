import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { commentCreateInput } from './comment-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnecommentArgs {

    @Field(() => commentCreateInput, {nullable:false})
    @Type(() => commentCreateInput)
    data!: commentCreateInput;
}

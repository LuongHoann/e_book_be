import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { reviewCreateInput } from './review-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnereviewArgs {

    @Field(() => reviewCreateInput, {nullable:false})
    @Type(() => reviewCreateInput)
    data!: reviewCreateInput;
}

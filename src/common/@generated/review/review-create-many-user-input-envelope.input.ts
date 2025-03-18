import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { reviewCreateManyUserInput } from './review-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class reviewCreateManyUserInputEnvelope {

    @Field(() => [reviewCreateManyUserInput], {nullable:false})
    @Type(() => reviewCreateManyUserInput)
    data!: Array<reviewCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

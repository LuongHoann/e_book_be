import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { commentCreateManyUserInput } from './comment-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class commentCreateManyUserInputEnvelope {

    @Field(() => [commentCreateManyUserInput], {nullable:false})
    @Type(() => commentCreateManyUserInput)
    data!: Array<commentCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

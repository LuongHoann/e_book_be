import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { commentCreateManyInput } from './comment-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManycommentArgs {

    @Field(() => [commentCreateManyInput], {nullable:false})
    @Type(() => commentCreateManyInput)
    data!: Array<commentCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

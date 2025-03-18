import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { reviewCreateManyInput } from './review-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyreviewArgs {

    @Field(() => [reviewCreateManyInput], {nullable:false})
    @Type(() => reviewCreateManyInput)
    data!: Array<reviewCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

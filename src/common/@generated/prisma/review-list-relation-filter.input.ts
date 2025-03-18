import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { reviewWhereInput } from '../review/review-where.input';

@InputType()
export class ReviewListRelationFilter {

    @Field(() => reviewWhereInput, {nullable:true})
    every?: reviewWhereInput;

    @Field(() => reviewWhereInput, {nullable:true})
    some?: reviewWhereInput;

    @Field(() => reviewWhereInput, {nullable:true})
    none?: reviewWhereInput;
}

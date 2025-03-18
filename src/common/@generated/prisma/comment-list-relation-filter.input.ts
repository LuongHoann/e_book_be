import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { commentWhereInput } from '../comment/comment-where.input';

@InputType()
export class CommentListRelationFilter {

    @Field(() => commentWhereInput, {nullable:true})
    every?: commentWhereInput;

    @Field(() => commentWhereInput, {nullable:true})
    some?: commentWhereInput;

    @Field(() => commentWhereInput, {nullable:true})
    none?: commentWhereInput;
}

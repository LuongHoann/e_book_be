import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { commentWhereInput } from './comment-where.input';
import { Type } from 'class-transformer';
import { commentOrderByWithRelationInput } from './comment-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { commentWhereUniqueInput } from './comment-where-unique.input';
import { Int } from '@nestjs/graphql';
import { CommentScalarFieldEnum } from '../prisma/comment-scalar-field.enum';

@ArgsType()
export class FindFirstcommentArgs {

    @Field(() => commentWhereInput, {nullable:true})
    @Type(() => commentWhereInput)
    where?: commentWhereInput;

    @Field(() => [commentOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<commentOrderByWithRelationInput>;

    @Field(() => commentWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<commentWhereUniqueInput, 'book_id_user_id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [CommentScalarFieldEnum], {nullable:true})
    distinct?: Array<`${CommentScalarFieldEnum}`>;
}

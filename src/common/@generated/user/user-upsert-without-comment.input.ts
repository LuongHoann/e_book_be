import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { userUpdateWithoutCommentInput } from './user-update-without-comment.input';
import { Type } from 'class-transformer';
import { userCreateWithoutCommentInput } from './user-create-without-comment.input';
import { userWhereInput } from './user-where.input';

@InputType()
export class userUpsertWithoutCommentInput {

    @Field(() => userUpdateWithoutCommentInput, {nullable:false})
    @Type(() => userUpdateWithoutCommentInput)
    update!: userUpdateWithoutCommentInput;

    @Field(() => userCreateWithoutCommentInput, {nullable:false})
    @Type(() => userCreateWithoutCommentInput)
    create!: userCreateWithoutCommentInput;

    @Field(() => userWhereInput, {nullable:true})
    @Type(() => userWhereInput)
    where?: userWhereInput;
}

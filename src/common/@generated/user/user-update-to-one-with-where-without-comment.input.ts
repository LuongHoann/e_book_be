import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { userWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { userUpdateWithoutCommentInput } from './user-update-without-comment.input';

@InputType()
export class userUpdateToOneWithWhereWithoutCommentInput {

    @Field(() => userWhereInput, {nullable:true})
    @Type(() => userWhereInput)
    where?: userWhereInput;

    @Field(() => userUpdateWithoutCommentInput, {nullable:false})
    @Type(() => userUpdateWithoutCommentInput)
    data!: userUpdateWithoutCommentInput;
}

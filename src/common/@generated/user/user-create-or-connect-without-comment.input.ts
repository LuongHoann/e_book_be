import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { userWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { userCreateWithoutCommentInput } from './user-create-without-comment.input';

@InputType()
export class userCreateOrConnectWithoutCommentInput {

    @Field(() => userWhereUniqueInput, {nullable:false})
    @Type(() => userWhereUniqueInput)
    where!: Prisma.AtLeast<userWhereUniqueInput, 'id' | 'email'>;

    @Field(() => userCreateWithoutCommentInput, {nullable:false})
    @Type(() => userCreateWithoutCommentInput)
    create!: userCreateWithoutCommentInput;
}

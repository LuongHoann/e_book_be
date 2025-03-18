import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { userCreateWithoutCommentInput } from './user-create-without-comment.input';
import { Type } from 'class-transformer';
import { userCreateOrConnectWithoutCommentInput } from './user-create-or-connect-without-comment.input';
import { userUpsertWithoutCommentInput } from './user-upsert-without-comment.input';
import { Prisma } from '@prisma/client';
import { userWhereUniqueInput } from './user-where-unique.input';
import { userUpdateToOneWithWhereWithoutCommentInput } from './user-update-to-one-with-where-without-comment.input';

@InputType()
export class userUpdateOneRequiredWithoutCommentNestedInput {

    @Field(() => userCreateWithoutCommentInput, {nullable:true})
    @Type(() => userCreateWithoutCommentInput)
    create?: userCreateWithoutCommentInput;

    @Field(() => userCreateOrConnectWithoutCommentInput, {nullable:true})
    @Type(() => userCreateOrConnectWithoutCommentInput)
    connectOrCreate?: userCreateOrConnectWithoutCommentInput;

    @Field(() => userUpsertWithoutCommentInput, {nullable:true})
    @Type(() => userUpsertWithoutCommentInput)
    upsert?: userUpsertWithoutCommentInput;

    @Field(() => userWhereUniqueInput, {nullable:true})
    @Type(() => userWhereUniqueInput)
    connect?: Prisma.AtLeast<userWhereUniqueInput, 'id' | 'email'>;

    @Field(() => userUpdateToOneWithWhereWithoutCommentInput, {nullable:true})
    @Type(() => userUpdateToOneWithWhereWithoutCommentInput)
    update?: userUpdateToOneWithWhereWithoutCommentInput;
}

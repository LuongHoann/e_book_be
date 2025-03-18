import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { commentWhereUniqueInput } from './comment-where-unique.input';
import { Type } from 'class-transformer';
import { commentUpdateWithoutUserInput } from './comment-update-without-user.input';

@InputType()
export class commentUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => commentWhereUniqueInput, {nullable:false})
    @Type(() => commentWhereUniqueInput)
    where!: Prisma.AtLeast<commentWhereUniqueInput, 'book_id_user_id'>;

    @Field(() => commentUpdateWithoutUserInput, {nullable:false})
    @Type(() => commentUpdateWithoutUserInput)
    data!: commentUpdateWithoutUserInput;
}

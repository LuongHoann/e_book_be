import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { userUpdateWithoutNewsInput } from './user-update-without-news.input';
import { Type } from 'class-transformer';
import { userCreateWithoutNewsInput } from './user-create-without-news.input';
import { userWhereInput } from './user-where.input';

@InputType()
export class userUpsertWithoutNewsInput {

    @Field(() => userUpdateWithoutNewsInput, {nullable:false})
    @Type(() => userUpdateWithoutNewsInput)
    update!: userUpdateWithoutNewsInput;

    @Field(() => userCreateWithoutNewsInput, {nullable:false})
    @Type(() => userCreateWithoutNewsInput)
    create!: userCreateWithoutNewsInput;

    @Field(() => userWhereInput, {nullable:true})
    @Type(() => userWhereInput)
    where?: userWhereInput;
}

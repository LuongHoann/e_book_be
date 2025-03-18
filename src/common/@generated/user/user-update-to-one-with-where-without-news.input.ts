import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { userWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { userUpdateWithoutNewsInput } from './user-update-without-news.input';

@InputType()
export class userUpdateToOneWithWhereWithoutNewsInput {

    @Field(() => userWhereInput, {nullable:true})
    @Type(() => userWhereInput)
    where?: userWhereInput;

    @Field(() => userUpdateWithoutNewsInput, {nullable:false})
    @Type(() => userUpdateWithoutNewsInput)
    data!: userUpdateWithoutNewsInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { userCreateWithoutNewsInput } from './user-create-without-news.input';
import { Type } from 'class-transformer';
import { userCreateOrConnectWithoutNewsInput } from './user-create-or-connect-without-news.input';
import { userUpsertWithoutNewsInput } from './user-upsert-without-news.input';
import { Prisma } from '@prisma/client';
import { userWhereUniqueInput } from './user-where-unique.input';
import { userUpdateToOneWithWhereWithoutNewsInput } from './user-update-to-one-with-where-without-news.input';

@InputType()
export class userUpdateOneRequiredWithoutNewsNestedInput {

    @Field(() => userCreateWithoutNewsInput, {nullable:true})
    @Type(() => userCreateWithoutNewsInput)
    create?: userCreateWithoutNewsInput;

    @Field(() => userCreateOrConnectWithoutNewsInput, {nullable:true})
    @Type(() => userCreateOrConnectWithoutNewsInput)
    connectOrCreate?: userCreateOrConnectWithoutNewsInput;

    @Field(() => userUpsertWithoutNewsInput, {nullable:true})
    @Type(() => userUpsertWithoutNewsInput)
    upsert?: userUpsertWithoutNewsInput;

    @Field(() => userWhereUniqueInput, {nullable:true})
    @Type(() => userWhereUniqueInput)
    connect?: Prisma.AtLeast<userWhereUniqueInput, 'id' | 'email'>;

    @Field(() => userUpdateToOneWithWhereWithoutNewsInput, {nullable:true})
    @Type(() => userUpdateToOneWithWhereWithoutNewsInput)
    update?: userUpdateToOneWithWhereWithoutNewsInput;
}

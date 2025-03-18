import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { userWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { userCreateWithoutFavouriteInput } from './user-create-without-favourite.input';

@InputType()
export class userCreateOrConnectWithoutFavouriteInput {

    @Field(() => userWhereUniqueInput, {nullable:false})
    @Type(() => userWhereUniqueInput)
    where!: Prisma.AtLeast<userWhereUniqueInput, 'id' | 'email'>;

    @Field(() => userCreateWithoutFavouriteInput, {nullable:false})
    @Type(() => userCreateWithoutFavouriteInput)
    create!: userCreateWithoutFavouriteInput;
}

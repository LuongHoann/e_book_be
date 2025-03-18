import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { userCreateWithoutFavouriteInput } from './user-create-without-favourite.input';
import { Type } from 'class-transformer';
import { userCreateOrConnectWithoutFavouriteInput } from './user-create-or-connect-without-favourite.input';
import { Prisma } from '@prisma/client';
import { userWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class userCreateNestedOneWithoutFavouriteInput {

    @Field(() => userCreateWithoutFavouriteInput, {nullable:true})
    @Type(() => userCreateWithoutFavouriteInput)
    create?: userCreateWithoutFavouriteInput;

    @Field(() => userCreateOrConnectWithoutFavouriteInput, {nullable:true})
    @Type(() => userCreateOrConnectWithoutFavouriteInput)
    connectOrCreate?: userCreateOrConnectWithoutFavouriteInput;

    @Field(() => userWhereUniqueInput, {nullable:true})
    @Type(() => userWhereUniqueInput)
    connect?: Prisma.AtLeast<userWhereUniqueInput, 'id' | 'email'>;
}

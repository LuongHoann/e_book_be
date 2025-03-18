import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { userUpdateWithoutFavouriteInput } from './user-update-without-favourite.input';
import { Type } from 'class-transformer';
import { userCreateWithoutFavouriteInput } from './user-create-without-favourite.input';
import { userWhereInput } from './user-where.input';

@InputType()
export class userUpsertWithoutFavouriteInput {

    @Field(() => userUpdateWithoutFavouriteInput, {nullable:false})
    @Type(() => userUpdateWithoutFavouriteInput)
    update!: userUpdateWithoutFavouriteInput;

    @Field(() => userCreateWithoutFavouriteInput, {nullable:false})
    @Type(() => userCreateWithoutFavouriteInput)
    create!: userCreateWithoutFavouriteInput;

    @Field(() => userWhereInput, {nullable:true})
    @Type(() => userWhereInput)
    where?: userWhereInput;
}

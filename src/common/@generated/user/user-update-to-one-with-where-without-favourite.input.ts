import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { userWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { userUpdateWithoutFavouriteInput } from './user-update-without-favourite.input';

@InputType()
export class userUpdateToOneWithWhereWithoutFavouriteInput {

    @Field(() => userWhereInput, {nullable:true})
    @Type(() => userWhereInput)
    where?: userWhereInput;

    @Field(() => userUpdateWithoutFavouriteInput, {nullable:false})
    @Type(() => userUpdateWithoutFavouriteInput)
    data!: userUpdateWithoutFavouriteInput;
}

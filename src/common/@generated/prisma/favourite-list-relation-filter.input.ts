import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { favouriteWhereInput } from '../favourite/favourite-where.input';

@InputType()
export class FavouriteListRelationFilter {

    @Field(() => favouriteWhereInput, {nullable:true})
    every?: favouriteWhereInput;

    @Field(() => favouriteWhereInput, {nullable:true})
    some?: favouriteWhereInput;

    @Field(() => favouriteWhereInput, {nullable:true})
    none?: favouriteWhereInput;
}

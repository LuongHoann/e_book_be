import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { bookCreateNestedOneWithoutFavouriteInput } from '../book/book-create-nested-one-without-favourite.input';
import { userCreateNestedOneWithoutFavouriteInput } from '../user/user-create-nested-one-without-favourite.input';

@InputType()
export class favouriteCreateInput {

    @Field(() => bookCreateNestedOneWithoutFavouriteInput, {nullable:false})
    book!: bookCreateNestedOneWithoutFavouriteInput;

    @Field(() => userCreateNestedOneWithoutFavouriteInput, {nullable:false})
    user!: userCreateNestedOneWithoutFavouriteInput;
}

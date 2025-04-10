import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { bookUpdateOneRequiredWithoutFavouriteNestedInput } from '../book/book-update-one-required-without-favourite-nested.input';
import { userUpdateOneRequiredWithoutFavouriteNestedInput } from '../user/user-update-one-required-without-favourite-nested.input';

@InputType()
export class favouriteUpdateInput {

    @Field(() => bookUpdateOneRequiredWithoutFavouriteNestedInput, {nullable:true})
    book?: bookUpdateOneRequiredWithoutFavouriteNestedInput;

    @Field(() => userUpdateOneRequiredWithoutFavouriteNestedInput, {nullable:true})
    user?: userUpdateOneRequiredWithoutFavouriteNestedInput;
}

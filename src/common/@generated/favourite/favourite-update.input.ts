import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { bookUpdateOneRequiredWithoutFavouriteNestedInput } from '../book/book-update-one-required-without-favourite-nested.input';
import { Type } from 'class-transformer';
import { userUpdateOneRequiredWithoutFavouriteNestedInput } from '../user/user-update-one-required-without-favourite-nested.input';

@InputType()
export class favouriteUpdateInput {

    @Field(() => bookUpdateOneRequiredWithoutFavouriteNestedInput, {nullable:true})
    @Type(() => bookUpdateOneRequiredWithoutFavouriteNestedInput)
    book?: bookUpdateOneRequiredWithoutFavouriteNestedInput;

    @Field(() => userUpdateOneRequiredWithoutFavouriteNestedInput, {nullable:true})
    user?: userUpdateOneRequiredWithoutFavouriteNestedInput;
}

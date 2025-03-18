import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { userUpdateOneRequiredWithoutFavouriteNestedInput } from '../user/user-update-one-required-without-favourite-nested.input';

@InputType()
export class favouriteUpdateWithoutBookInput {

    @Field(() => userUpdateOneRequiredWithoutFavouriteNestedInput, {nullable:true})
    user?: userUpdateOneRequiredWithoutFavouriteNestedInput;
}

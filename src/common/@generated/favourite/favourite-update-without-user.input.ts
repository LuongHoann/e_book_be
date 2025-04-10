import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { bookUpdateOneRequiredWithoutFavouriteNestedInput } from '../book/book-update-one-required-without-favourite-nested.input';

@InputType()
export class favouriteUpdateWithoutUserInput {

    @Field(() => bookUpdateOneRequiredWithoutFavouriteNestedInput, {nullable:true})
    book?: bookUpdateOneRequiredWithoutFavouriteNestedInput;
}

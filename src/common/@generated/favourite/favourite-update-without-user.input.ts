import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { bookUpdateOneRequiredWithoutFavouriteNestedInput } from '../book/book-update-one-required-without-favourite-nested.input';
import { Type } from 'class-transformer';

@InputType()
export class favouriteUpdateWithoutUserInput {

    @Field(() => bookUpdateOneRequiredWithoutFavouriteNestedInput, {nullable:true})
    @Type(() => bookUpdateOneRequiredWithoutFavouriteNestedInput)
    book?: bookUpdateOneRequiredWithoutFavouriteNestedInput;
}

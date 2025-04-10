import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { bookCreateNestedOneWithoutFavouriteInput } from '../book/book-create-nested-one-without-favourite.input';

@InputType()
export class favouriteCreateWithoutUserInput {

    @Field(() => bookCreateNestedOneWithoutFavouriteInput, {nullable:false})
    book!: bookCreateNestedOneWithoutFavouriteInput;
}

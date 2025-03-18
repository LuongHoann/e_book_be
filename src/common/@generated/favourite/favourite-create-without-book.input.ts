import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { userCreateNestedOneWithoutFavouriteInput } from '../user/user-create-nested-one-without-favourite.input';

@InputType()
export class favouriteCreateWithoutBookInput {

    @Field(() => userCreateNestedOneWithoutFavouriteInput, {nullable:false})
    user!: userCreateNestedOneWithoutFavouriteInput;
}

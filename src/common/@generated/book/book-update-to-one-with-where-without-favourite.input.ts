import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { bookWhereInput } from './book-where.input';
import { Type } from 'class-transformer';
import { bookUpdateWithoutFavouriteInput } from './book-update-without-favourite.input';

@InputType()
export class bookUpdateToOneWithWhereWithoutFavouriteInput {

    @Field(() => bookWhereInput, {nullable:true})
    @Type(() => bookWhereInput)
    where?: bookWhereInput;

    @Field(() => bookUpdateWithoutFavouriteInput, {nullable:false})
    @Type(() => bookUpdateWithoutFavouriteInput)
    data!: bookUpdateWithoutFavouriteInput;
}

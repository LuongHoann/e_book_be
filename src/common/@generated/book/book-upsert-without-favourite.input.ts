import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { bookUpdateWithoutFavouriteInput } from './book-update-without-favourite.input';
import { Type } from 'class-transformer';
import { bookCreateWithoutFavouriteInput } from './book-create-without-favourite.input';
import { bookWhereInput } from './book-where.input';

@InputType()
export class bookUpsertWithoutFavouriteInput {

    @Field(() => bookUpdateWithoutFavouriteInput, {nullable:false})
    @Type(() => bookUpdateWithoutFavouriteInput)
    update!: bookUpdateWithoutFavouriteInput;

    @Field(() => bookCreateWithoutFavouriteInput, {nullable:false})
    @Type(() => bookCreateWithoutFavouriteInput)
    create!: bookCreateWithoutFavouriteInput;

    @Field(() => bookWhereInput, {nullable:true})
    @Type(() => bookWhereInput)
    where?: bookWhereInput;
}

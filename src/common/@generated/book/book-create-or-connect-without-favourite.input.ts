import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { bookWhereUniqueInput } from './book-where-unique.input';
import { Type } from 'class-transformer';
import { bookCreateWithoutFavouriteInput } from './book-create-without-favourite.input';

@InputType()
export class bookCreateOrConnectWithoutFavouriteInput {

    @Field(() => bookWhereUniqueInput, {nullable:false})
    @Type(() => bookWhereUniqueInput)
    where!: Prisma.AtLeast<bookWhereUniqueInput, 'id' | 'isbn'>;

    @Field(() => bookCreateWithoutFavouriteInput, {nullable:false})
    @Type(() => bookCreateWithoutFavouriteInput)
    create!: bookCreateWithoutFavouriteInput;
}

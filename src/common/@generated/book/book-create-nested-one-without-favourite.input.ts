import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { bookCreateWithoutFavouriteInput } from './book-create-without-favourite.input';
import { Type } from 'class-transformer';
import { bookCreateOrConnectWithoutFavouriteInput } from './book-create-or-connect-without-favourite.input';
import { Prisma } from '@prisma/client';
import { bookWhereUniqueInput } from './book-where-unique.input';

@InputType()
export class bookCreateNestedOneWithoutFavouriteInput {

    @Field(() => bookCreateWithoutFavouriteInput, {nullable:true})
    @Type(() => bookCreateWithoutFavouriteInput)
    create?: bookCreateWithoutFavouriteInput;

    @Field(() => bookCreateOrConnectWithoutFavouriteInput, {nullable:true})
    @Type(() => bookCreateOrConnectWithoutFavouriteInput)
    connectOrCreate?: bookCreateOrConnectWithoutFavouriteInput;

    @Field(() => bookWhereUniqueInput, {nullable:true})
    @Type(() => bookWhereUniqueInput)
    connect?: Prisma.AtLeast<bookWhereUniqueInput, 'id' | 'isbn'>;
}

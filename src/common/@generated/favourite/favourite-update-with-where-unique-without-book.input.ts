import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { favouriteWhereUniqueInput } from './favourite-where-unique.input';
import { Type } from 'class-transformer';
import { favouriteUpdateWithoutBookInput } from './favourite-update-without-book.input';

@InputType()
export class favouriteUpdateWithWhereUniqueWithoutBookInput {

    @Field(() => favouriteWhereUniqueInput, {nullable:false})
    @Type(() => favouriteWhereUniqueInput)
    where!: Prisma.AtLeast<favouriteWhereUniqueInput, 'book_id_user_id'>;

    @Field(() => favouriteUpdateWithoutBookInput, {nullable:false})
    @Type(() => favouriteUpdateWithoutBookInput)
    data!: favouriteUpdateWithoutBookInput;
}

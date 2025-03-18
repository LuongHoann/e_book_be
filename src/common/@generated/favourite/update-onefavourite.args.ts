import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { favouriteUpdateInput } from './favourite-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { favouriteWhereUniqueInput } from './favourite-where-unique.input';

@ArgsType()
export class UpdateOnefavouriteArgs {

    @Field(() => favouriteUpdateInput, {nullable:false})
    @Type(() => favouriteUpdateInput)
    data!: favouriteUpdateInput;

    @Field(() => favouriteWhereUniqueInput, {nullable:false})
    @Type(() => favouriteWhereUniqueInput)
    where!: Prisma.AtLeast<favouriteWhereUniqueInput, 'book_id_user_id'>;
}

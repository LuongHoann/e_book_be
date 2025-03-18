import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { favouriteWhereUniqueInput } from './favourite-where-unique.input';
import { Type } from 'class-transformer';
import { favouriteCreateInput } from './favourite-create.input';
import { favouriteUpdateInput } from './favourite-update.input';

@ArgsType()
export class UpsertOnefavouriteArgs {

    @Field(() => favouriteWhereUniqueInput, {nullable:false})
    @Type(() => favouriteWhereUniqueInput)
    where!: Prisma.AtLeast<favouriteWhereUniqueInput, 'book_id_user_id'>;

    @Field(() => favouriteCreateInput, {nullable:false})
    @Type(() => favouriteCreateInput)
    create!: favouriteCreateInput;

    @Field(() => favouriteUpdateInput, {nullable:false})
    @Type(() => favouriteUpdateInput)
    update!: favouriteUpdateInput;
}

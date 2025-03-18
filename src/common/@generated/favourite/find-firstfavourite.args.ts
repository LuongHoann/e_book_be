import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { favouriteWhereInput } from './favourite-where.input';
import { Type } from 'class-transformer';
import { favouriteOrderByWithRelationInput } from './favourite-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { favouriteWhereUniqueInput } from './favourite-where-unique.input';
import { Int } from '@nestjs/graphql';
import { FavouriteScalarFieldEnum } from '../prisma/favourite-scalar-field.enum';

@ArgsType()
export class FindFirstfavouriteArgs {

    @Field(() => favouriteWhereInput, {nullable:true})
    @Type(() => favouriteWhereInput)
    where?: favouriteWhereInput;

    @Field(() => [favouriteOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<favouriteOrderByWithRelationInput>;

    @Field(() => favouriteWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<favouriteWhereUniqueInput, 'book_id_user_id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [FavouriteScalarFieldEnum], {nullable:true})
    distinct?: Array<`${FavouriteScalarFieldEnum}`>;
}

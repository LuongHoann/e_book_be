import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { favouriteWhereInput } from './favourite-where.input';
import { Type } from 'class-transformer';
import { favouriteOrderByWithAggregationInput } from './favourite-order-by-with-aggregation.input';
import { FavouriteScalarFieldEnum } from '../prisma/favourite-scalar-field.enum';
import { favouriteScalarWhereWithAggregatesInput } from './favourite-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class favouriteGroupByArgs {

    @Field(() => favouriteWhereInput, {nullable:true})
    @Type(() => favouriteWhereInput)
    where?: favouriteWhereInput;

    @Field(() => [favouriteOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<favouriteOrderByWithAggregationInput>;

    @Field(() => [FavouriteScalarFieldEnum], {nullable:false})
    by!: Array<`${FavouriteScalarFieldEnum}`>;

    @Field(() => favouriteScalarWhereWithAggregatesInput, {nullable:true})
    having?: favouriteScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}

import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { favouriteWhereInput } from './favourite-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyfavouriteArgs {

    @Field(() => favouriteWhereInput, {nullable:true})
    @Type(() => favouriteWhereInput)
    where?: favouriteWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}

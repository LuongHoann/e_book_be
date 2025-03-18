import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { favouriteUncheckedUpdateManyInput } from './favourite-unchecked-update-many.input';
import { Type } from 'class-transformer';
import { favouriteWhereInput } from './favourite-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyfavouriteArgs {

    @Field(() => favouriteUncheckedUpdateManyInput, {nullable:false})
    @Type(() => favouriteUncheckedUpdateManyInput)
    data!: favouriteUncheckedUpdateManyInput;

    @Field(() => favouriteWhereInput, {nullable:true})
    @Type(() => favouriteWhereInput)
    where?: favouriteWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}

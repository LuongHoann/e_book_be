import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { favouriteCreateInput } from './favourite-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnefavouriteArgs {

    @Field(() => favouriteCreateInput, {nullable:false})
    @Type(() => favouriteCreateInput)
    data!: favouriteCreateInput;
}

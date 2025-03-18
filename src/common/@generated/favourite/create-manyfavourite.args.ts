import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { favouriteCreateManyInput } from './favourite-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyfavouriteArgs {

    @Field(() => [favouriteCreateManyInput], {nullable:false})
    @Type(() => favouriteCreateManyInput)
    data!: Array<favouriteCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

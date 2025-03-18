import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { favouriteCreateManyUserInput } from './favourite-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class favouriteCreateManyUserInputEnvelope {

    @Field(() => [favouriteCreateManyUserInput], {nullable:false})
    @Type(() => favouriteCreateManyUserInput)
    data!: Array<favouriteCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

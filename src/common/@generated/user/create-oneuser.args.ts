import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { userCreateInput } from './user-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneuserArgs {

    @Field(() => userCreateInput, {nullable:false})
    @Type(() => userCreateInput)
    data!: userCreateInput;
}

import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { roleCreateInput } from './role-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneroleArgs {

    @Field(() => roleCreateInput, {nullable:false})
    @Type(() => roleCreateInput)
    data!: roleCreateInput;
}

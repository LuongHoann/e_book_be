import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { permissionCreateInput } from './permission-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnepermissionArgs {

    @Field(() => permissionCreateInput, {nullable:false})
    @Type(() => permissionCreateInput)
    data!: permissionCreateInput;
}

import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { licenseCreateInput } from './license-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnelicenseArgs {

    @Field(() => licenseCreateInput, {nullable:true})
    @Type(() => licenseCreateInput)
    data?: licenseCreateInput;
}
